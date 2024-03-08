"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    // Router instance
    const router = useRouter();

    // Default username and password
    const defaultUsername = "admin";
    const defaultPassword = "admin";

    // Function to handle login
  const handleLogin = () => {
    if (username === defaultUsername && password === defaultPassword) {
      // Redirect to dashboard route if username and password match
      router.push("/pages/dashboard");
    } else {
      // Handle incorrect credentials
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="bg-white w-[400px] h-[500px] rounded-md px-[4rem]">
      <Image
        className="mx-auto"
        src="/logo.png"
        width={120}
        height={120}
        alt="Logo"
      />
      <div className="text-start font-semibold text-2xl text-primary">
        Join <br />
        LaborLinkz
      </div>
      <p className="font-normal">
        Login to your account and discover local laborers near you.
      </p>
      <input
        className="shadow-md border w-[100%] px-2 py-2 rounded-md my-1"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="shadow-md border w-[100%] px-2 py-2 rounded-md my-1"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-primary mt-5 w-[100%] py-3 rounded-md font-semibold"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};


export default LoginForm;