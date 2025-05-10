import WuraSvg from "./WURA .svg"; // Ensure the path is correct and has no extra spaces
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for useNavigate and Link
import Google from "./google.svg";
import Github from "./github.svg";
import Twitter from "./twitter.svg";
// import { LayoutDashboard, Facebook } from "lucide-react";

export function SignUp() {
  const [subscribe, setSubscribe] = useState(false); // State for the subscribe checkbox
  const navigate = useNavigate(); // Initialize useNavigate
  const handleLoginClick = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    navigate("/"); // Navigate to the EmailVerification page
  };
  // State to control the zoom-in animation
  const [isZoomed, setIsZoomed] = useState(false);

  // Trigger the zoom-in effect when the component mounts
  useEffect(() => {
    setIsZoomed(true);
  }, []);
  return (
    <main className="overflow-y-hidden min-h-screen">
      {/* Left Side: Form */}
      <div className="p-4 md:p-12">
      <div
        className={`flex-1 flex items-center justify-center bg-white p-8 rounded-lg shadow-md text-center w-full transform transition-all duration-500 ease-in-out ${
          isZoomed ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <div className="w-full max-w-md">
          <img src={WuraSvg} alt="Wura Logo" className="mx-auto w-20 h-20" />
          <h1 className="text-3xl text-slate-800 font-bold text-center">
            Log In
          </h1>
          <form className="space-y-4" onSubmit={handleLoginClick}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  First Name
                </label>
                <input
                  type="firstName"
                  id="firstName"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-blue-400"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 text-start"
                >
                  Last Name
                </label>
                <input
                  type="lastName"
                  id="lastName"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-blue-400"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-start block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-blue-400"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-start block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-blue-400"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="subscribe"
                checked={subscribe}
                onChange={(e) => setSubscribe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded"
              />
              <label htmlFor="subscribe" className="ml-2 text-sm text-gray-700 text-start">
                Subscribe to newsletter
              </label>
            </div>
            <button
              type="submit" // Keep type as "submit" to trigger form validation
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Or sign up with</p>
            <div className="mt-8 flex justify-center space-x-8">
              {/* <LayoutDashboard className=" fill-amber-400" />
              <Facebook className="text-blue-400 fill-blue-400 w-5 h-5" /> */}
              <img src={Google} alt="Wura Logo" className="w-5 h-5" />
              <img src={Twitter} alt="Wura Logo" className="w-5 h-5" />
              <img src={Github} alt="Wura Logo" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      </div>
    
    </main>
  );
}
