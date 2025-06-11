import WuraSvg from "./WURA .svg"; // Ensure the path is correct and has no extra spaces
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Google from "./google.svg";
import Github from "./github.svg";
import Twitter from "./twitter.svg";

export function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "", // Added role field
    subscribe: false
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically:
    // 1. Send the data to your backend/auth service
    // 2. Get the user data back after successful signup
    // 3. Store the user data (in context, redux, or local storage)
    // 4. Navigate to dashboard
    
    // For demo purposes, we'll store in localStorage and navigate
    const userData = {
      name: `${formData.firstName} ${formData.lastName}`,
      role: formData.role || 'User', // Default role if not provided
      email: formData.email
    };
    
    localStorage.setItem('user', JSON.stringify(userData));
    navigate("/dashboard");
  };

  return (
    <main className="overflow-y-hidden min-h-screen">
      <div className="p-4 md:p-12">
        <div className="flex-1 flex items-center justify-center bg-white p-8 rounded-lg shadow-md text-center w-full">
          <div className="w-full max-w-md">
            <img src={WuraSvg} alt="Wura Logo" className="mx-auto w-20 h-20" />
            <h1 className="text-3xl text-slate-800 font-bold text-center">
              Sign Up
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 text-start">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-blue-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 text-start">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-blue-400"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="role" className="text-start block text-sm font-medium text-gray-700">
                  Role (Optional)
                </label>
                <input
                  type="text"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="E.g., Art Director, Developer"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-blue-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-start block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-blue-400"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="text-start block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-blue-400"
                  required
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded"
                />
                <label htmlFor="subscribe" className="ml-2 text-sm text-gray-700 text-start">
                  Subscribe to newsletter
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">Or sign up with</p>
              <div className="mt-8 flex justify-center space-x-8">
                <img src={Google} alt="Google" className="w-5 h-5" />
                <img src={Twitter} alt="Twitter" className="w-5 h-5" />
                <img src={Github} alt="GitHub" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}