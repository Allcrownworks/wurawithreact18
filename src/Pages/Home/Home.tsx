import { Facebook } from "lucide-react";
import Google from "./google.svg";
import Github from "./github.svg";
import Twitter from "./twitter.svg";
import WuraSvg from "./WURA .svg"; // Ensure the path is correct and has no extra spaces
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Correct import for useNavigate and Link
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";
import pic5 from "./pic5.jpg";

const carouselItems = [
  { img: pic1 },
  { img: pic2 },
  { img: pic3 },
  { img: pic4 },
  { img: pic5 },
];
export function Home() {
  const [subscribe, setSubscribe] = useState(false); // State for the subscribe checkbox
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    navigate("/emailverification"); // Navigate to the EmailVerification page
  };
  // ------------------right side functons-----------
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(true);

    // Auto-slide effect every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      setIsZoomed(false);
      setTimeout(() => setIsZoomed(true), 300); // Reset zoom effect
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="p-4 shadow-md w-full min-h-screen ">
          {/* Left Side: Form */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full">
              <img
                src={WuraSvg}
                alt="Wura Logo"
                className="mx-auto w-20 h-20"
              />
              <h1 className="text-3xl text-slate-800 font-bold text-center">
                Log In
              </h1>
              <form className="space-y-4" onSubmit={handleLoginClick}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border-blue-500 mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="border-blue-500 outline-none mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="subscribe"
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-600 rounded"
                  />
                  <label
                    htmlFor="subscribe"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Subscribe to newsletter
                  </label>
                </div>
                <button
                  type="submit" // Keep type as "submit" to trigger form validation
                  className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Login
                </button>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Not registered?{" "}
                    <Link
                      to="/signup"
                      className="text-blue-600 hover:underline"
                    >
                      Sign up here
                    </Link>
                  </p>
                </div>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">Or sign up with</p>
                <div className="mt-8 flex justify-center space-x-8">
                  <Facebook className="text-blue-400 fill-blue-400 w-5 h-5" /> 
                  <img src={Google} alt="Wura Logo" className="w-5 h-5" />
                  <img src={Twitter} alt="Wura Logo" className="w-5 h-5" />
                  <img src={Github} alt="Wura Logo" className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative sm:flex items-center justify-center overflow-hidden hidden">
          {/* Carousel Background */}
          <div className="absolute inset-0 bg-black/6o">
            {/* Right Side: Zoom-in Effect */}
            <div className="flex-1 flex items-center justify-center h-full inset-0 bg-black/6o">
              <div
                className={`relative h-screen  shadow-md text-center w-full transform transition-all duration-500 ease-in-out ${
                  isZoomed ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
              >
                <img
                  src={carouselItems[currentIndex].img}
                  alt="Zoomed Slide"
                  className={`w-full h-full object-cover transition-transform duration-1000  ${
                    isZoomed ? "scale-100 opacity-100" : "scale-90 opacity-80"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Static Text and Button Overlay */}
          <div className="relative z-10 flex items-center justify-center h-screen text-white p-6 bg-black/60 backdrop-filter bg-opacity-10 w-full">
            <div className="flex flex-col items-center text-center max-w-lg mx-auto">
              <p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                The hero section slideshow <br /> nobody asked for
              </p>

              <Link
                to="/joinnow"
                className="bg-emerald-300/10 backdrop-filter bg-opacity-10 backdrop-blur-xs  text-white py-2 px-4 rounded-full flex justify-center items-center space-x-2  border-t-1 border-b-1 border-l-0 border-r-0 border-emerald-500/20 cursor-pointer"
              >
                <p>Join now →</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
