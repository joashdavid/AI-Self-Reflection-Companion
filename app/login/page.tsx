// app/login/page.tsx
"use client";

import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Assuming react-icons is installed
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { supabase } from "@/lib/supabaseClient";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert(error.message);
    return;
  }

  console.log("Logged in user:", data);

  // ✅ Redirect after login
  router.push("/");
};
  return (
    // <div className="min-h-screen flex items-center justify-center  p-4">
    <div className="min-h-screen flex items-center justify-center 
 bg-cover bg-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        {/* Title */}
        <h1 className="text-indigo-400 text-3xl font-bold text-center mb-6">Welcome Back</h1>
        <div className="border-b border-gray-200 mb-8"></div>

        <form className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaEnvelope className="text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-gray-50 text-gray-700"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaLock className="text-gray-400" />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-gray-50 text-gray-700"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-blue-400 text-sm hover:underline">Forgot Password?</a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full text-white text-lg font-bold
                       bg-gradient-to-r from-purple-700 to-blue-700
                       hover:from-purple-800 hover:to-blue-800
                       transition duration-200 ease-in-out transform hover:-translate-y-0.5"
                       onClick={handleLogin}
          >
            Sign In
          </button>
        </form>

        {/* Or continue with */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="px-4 text-gray-400 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Icons */}
        {/* <div className="flex justify-center space-x-6">
          <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center">
            <FaGoogle className="h-6 w-6 text-red-500" />
          </button>
          <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center">
            <FaFacebookF className="h-6 w-6 text-blue-500" />
          </button>
        </div> */}
        <div className="flex justify-center gap-6">
  
  {/* Google */}
  <button
    type="button"
    className="w-12 h-12 flex items-center justify-center 
    bg-white rounded-full shadow-md 
    hover:shadow-lg hover:scale-105 
    transition-all duration-200"
  >
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google"
      className="w-6 h-6"
    />
  </button>

  {/* Facebook */}
  <button
    type="button"
    className="w-12 h-12 flex items-center justify-center 
    bg-white rounded-full shadow-md 
    hover:shadow-lg hover:scale-105 
    transition-all duration-200"
  >
    <img
      src="https://www.svgrepo.com/show/475647/facebook-color.svg"
      alt="Facebook"
      className="w-6 h-6"
    />
  </button>

</div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          New to the platform?{' '}
          <a href="/register" className="text-blue-400 font-medium hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
