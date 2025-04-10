export default function SignUp() {
    return (
        <div>
        <h1>Sign Up</h1>
        <form action="/api/auth/signup" method="POST">
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="password" name="confirm_password" placeholder="Confirm your Password" required />
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
}
