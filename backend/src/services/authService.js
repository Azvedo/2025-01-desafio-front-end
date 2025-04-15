import { users } from '../data/data.js';
import jwt from 'jsonwebtoken';

export const signup = async (user) => {
    const { email, password } = user;
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        throw new Error('User already exists');
    }
    const newUser = { email, password };
    users.push(newUser);
    console.log(users);
    return newUser;
}

export const signin = async (user) => {
    const { email, password } = user;
    const existingUser = users.find((user) => user.email === email && user.password === password);
    if (!existingUser) {
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ email: existingUser.email }, 'your_secret_key', { expiresIn: '1h' });
    return {token};
}