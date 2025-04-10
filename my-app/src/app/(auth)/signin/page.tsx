
export default function SignIn() {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1>Entre e acompanhe tudo do seu time do coração</h1>
                <form action="/api/auth/signin" method="POST" className="flex flex-col items-center justify-center w-full max-w-sm p-8">
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}