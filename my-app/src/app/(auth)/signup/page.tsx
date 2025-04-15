'use client'
import { useState } from "react";
import { signUp } from "@/services/auth";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
    const [error, setError] = useState<string | null>(null);

    
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setIsPasswordMismatch(true);
            return;
        }
        setIsPasswordMismatch(false);
        try {
            const response = await signUp(email, password);
            console.log("Sign up successful:", response);
            router.push("/signin");
        } catch (error) {
            console.error("Error signing up:", error);
            setError("Erro ao criar conta. Tente novamente mais tarde.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 mx-auto max-w-sm shadow-lg rounded-2xl">
            <h1 className="font-semibold text-center text-2xl my-10">Crie sua conta e acompanhe tudo do seu time do coração!</h1>
            {error && <p className="text-red-500 text-sm">{error}</p>} 
            <form onSubmit={handleSignUp} method="POST" className="flex flex-col items-center justify-center w-full max-w-sm p-8 gap-2">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="shadow-md rounded-lg p-2 w-full"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="shadow-md rounded-lg p-2 w-full"
                />
                <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm your Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className={`shadow-md rounded-lg p-2 w-full ${isPasswordMismatch ? 'border-red-500 border-2' : ''}`}
                />
                {isPasswordMismatch && (
                    <p className="text-red-500 text-sm">As senhas devem ser iguais!</p>
                )}
                <button
                    type="submit"
                    className="bg-gray-800 w-full rounded-2xl text-white p-2 mt-8 hover:bg-gray-800/80 hover:font-bold cursor-pointer"
                >
                    Sign Up
                </button>
            </form>
            <div className="flex flex-row gap-2 mt-4">
                <p>Já tem uma conta?</p>
                <a href="/signin" className="text-gray-800 font-regular">Entre agora!</a>
            </div>
        </div>
    );
}
