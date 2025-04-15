'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const tokenTimestamp = localStorage.getItem('tokenTimestamp');

        if (token && tokenTimestamp) {
            const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
            const currentTime = new Date().getTime();
            const tokenAge = currentTime - parseInt(tokenTimestamp, 10);

            if (tokenAge < oneHour) {
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem('token');
                localStorage.removeItem('tokenTimestamp');
                setIsAuthenticated(false);
                router.push('/signin');
            }
        } else {
            setIsAuthenticated(false);
            router.push('/signin');
        }
    }, [router]);

    if (isAuthenticated === null) {
        return <div className="flex items-center justify-center h-screen">Carregando...</div>;
    }

    return <>{children}</>;
};

export default Layout;