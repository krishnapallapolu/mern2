"use client"; // Add this to the top of the login component

import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const apiUrl = process.env.BACKEND_APP_URL;

        try {
            const response = await axios.post(
                `${apiUrl}api/auth/login`,
                {
                    email,
                    password,
                }
            );
            const token = response.data.token;
            localStorage.setItem("token", token); // Store token in localStorage
            setMessage("Login successful!");
        } catch (error) {
            setMessage("Login failed.");
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center space-x-2">
            <div className="card min-h-96 min-w-96 flex flex-col items-center p-3 bg-white text-black rounded-xl shadow-inner">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4 flex flex-col text-black">
                        <label>Email:</label>
                        <input className="text-black border-2 border-blue-200 border-solid"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 flex flex-col text-black">
                        <label>Password:</label>
                        <input className="text-black border-2 border-blue-200 border-solid"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="bg-sky-700 text-white text-bold py-3 px-4" type="submit">Login</button>
                </form>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default LoginPage;
