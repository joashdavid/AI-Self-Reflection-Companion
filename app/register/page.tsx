// app/register/page.tsx
"use client";

import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Using react-icons
import { supabase } from "@/lib/supabaseClient";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const isMatch = password === confirmPassword && confirmPassword.length > 0;
  const isTyping = confirmPassword.length > 0;
  
  const handleSignUp = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Account created! Please check your email.");
  router.push("/login");
};
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header Section */}
      {/* <div className="text-center mb-8">
        <h1 className="text-indigo-700 text-3xl text-4xl sm:text-5xl font-bold mb-2">
          AI Self-Reflection Companion
        </h1>
        <div className="w-full h-0.5 bg-gray-200 mb-6"></div>
        <p className="text-indigo-400 text-3xl font-bold text-lg">
          A space for mindful growth
        </p>
      </div> */}

      {/* Main Card */}
      <div className="relative bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl
                      max-w-md w-full mx-auto flex flex-col items-center">

        {/* Card Content */}
        <h2 className="text-indigo-800 text-3xl font-bold text-2xl sm:text-3xl font-semibold text-center mb-4">
          Create Your Account
        </h2>
        <div className="border-b border-gray-200 w-full mb-6"></div>

        <form className="space-y-6 w-full">
          {/* Full Name Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaUser className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-gray-50 text-gray-700"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaEnvelope className="text-gray-500" />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-gray-50 text-gray-700"
            />
          </div>

          {/* Password Input */}
          {/* <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaLock className="text-gray-500" />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-gray-50 text-gray-700"
            />
          </div> */}
          <div className="relative">
            {/* Left Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaLock className="text-gray-500" />
            </div>

            {/* Input */}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 
    focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-gray-50 text-gray-700"
            />

            {/* Right Toggle Icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password Input */}
          {/* <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaLock className="text-gray-500" />
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-gray-50 text-gray-700"
            />
          </div> */}
          <div className="relative">
            {/* Left Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaLock className="text-gray-500" />
            </div>

            {/* Input */}
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 
    focus:ring-blue-500 focus:border-blue-500 shadow-sm bg-gray-50 text-gray-700"
            />

            {/* Eye Icon */}
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Live Feedback */}
          {confirmPassword.length > 0 && (
            <p
              className={`text-sm mt-2 ${password === confirmPassword
                  ? "text-green-600"
                  : "text-red-500"
                }`}
            >
              {password === confirmPassword
                ? "✅ Passwords match"
                : "❌ Passwords do not match"}
            </p>
          )}

          {/* Sign Up Button */}
          <button
            type="submit"
            className="space-y-6 w-full py-3 rounded-full text-white text-lg font-bold
                       bg-gradient-to-r from-purple-700 to-blue-700
                       hover:from-purple-800 hover:to-blue-800
                       transition duration-200 ease-in-out transform hover:-translate-y-0.5"
            // onClick={handleSignUp}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <span className="px-4 text-gray-500 text-sm">Or continue with</span>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Social Sign Up Buttons */}
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

        {/* Terms Text */}
        <p className="text-center text-gray-500 text-xs mt-4">
          By signing up, you agree to our{' '}
          <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and{' '}
          <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
        </p>

        {/* Bottom Section */}
        <div className="border-b border-gray-200 w-full mt-6 mb-4"></div>
        <p className="text-center text-gray-500 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 font-medium hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
