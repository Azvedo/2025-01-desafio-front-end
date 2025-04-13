import { signup, signin } from "../services/authService.js";

export const signUp = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Email must be a valid email address." });
    }

    const newUser = { email, password };
    signup(newUser)
        .then((user) => {
            return res.status(201).json({message: "User created successfully"});
        })
        .catch((error) => {
            return res.status(500).json({ error: error.message });
        });
}


export const signIn = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    const existingUser = { email, password };
    signin(existingUser)
        .then((user) => {
            return res.status(200).json(user);
        })
        .catch((error) => {
            return res.status(500).json({ error: error.message });
        });
}


