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
        if (token) {
            setIsAuthenticated(true);
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