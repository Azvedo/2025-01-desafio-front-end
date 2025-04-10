
export default function SignIn() {
    return (
            <div className="flex flex-col items-center justify-center p-4 mx-auto max-w-sm shadow-lg rounded-2xl  ">
                <h1 className="font-semibold text-center text-2xl my-10">Entre e acompanhe tudo do seu time do coração!</h1>
                <form action="/api/auth/signin" method="POST" className="flex flex-col items-center justify-center w-full max-w-sm p-8 gap-2">
                    <input type="email" name="email" placeholder="Email" required className="shadow-md rounded-lg p-2 w-full" />
                    <input type="password" name="password" placeholder="Password" required className="shadow-md rounded-lg p-2 w-full" />
                    <button type="submit" className="bg-gray-800 w-full rounded-2xl text-white p-2 mt-8 hover:bg-gray-800/80 hover:font-bold cursor-pointer">Sign In</button>
                </form>
                <div className="flex flex-row gap-2 mt-4">
                    <p>Não tem uma conta?</p>
                    <a href="/signup" className="text-gray-800 font-regular">Crie uma agora!</a>
                </div>
            </div>
    );
}