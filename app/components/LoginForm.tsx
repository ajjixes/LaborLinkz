import React from "react";
import Image from "next/image";

const LoginForm = () => {
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
      />
      <input
        className="shadow-md border w-[100%] px-2 py-2 rounded-md my-1"
        type="password"
        placeholder="Password"
      />
      <button className="bg-primary mt-5 w-[100%] py-3 rounded-md font-semibold">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
