"use client"; // Add this to the top to indicate it's a Client Component

import { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5005/api/auth/register",
                {
                    username,
                    email,
                    password,
                }
            );
            setMessage(response.data.message); // Show success message
        } catch (error) {
            setMessage("Registration failed.");
            console.error("Error registering user:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center space-x-2 text-base">
            <div className="card p-4 shadow-2xl bg-orange-500 rounded-2xl">
                <h2 className="text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default RegisterPage;

//calculate body mass index of two person based on height and weight


