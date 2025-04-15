'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            const response = await login(email, password);
            localStorage.setItem("token", response.token);
            localStorage.setItem("tokenTimestamp", new Date().getTime().toString());
            console.log("Login successful");
            router.push("/chose_team");
        } catch (error) {
            console.error("Login failed", error);
            setError("Email ou senha inválidos!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 mx-auto max-w-sm shadow-lg rounded-2xl">
            <h1 className="font-semibold text-center text-2xl my-10">Entre e acompanhe tudo do seu time do coração!</h1>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <form onSubmit={handleSignIn} className="flex flex-col items-center justify-center w-full max-w-sm p-8 gap-2">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="shadow-md rounded-lg p-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="shadow-md rounded-lg p-2 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-gray-800 w-full rounded-2xl text-white p-2 mt-8 hover:bg-gray-800/80 hover:font-bold cursor-pointer"
                >
                    {loading ? (
                        <svg
                            className="animate-spin h-5 w-5 text-white mx-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    ) : (
                        "Login"
                    )}
                </button>
            </form>
            <div className="flex flex-row gap-2 mt-4">
                <p>Não tem uma conta?</p>
                <a href="/signup" className="text-gray-800 font-regular">Crie uma agora!</a>
            </div>
        </div>
    );
}