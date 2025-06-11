import {
  LayoutDashboard,
  BriefcaseBusiness,
  Clock10,
  Church,
  Hotel,
  House,
  ShoppingCart,
  Shield,
  Calendar,
  Handshake,
  GraduationCap,
} from "lucide-react";
import profile from "./profile_small.jpg";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface UserData {
  name: string;
  role?: string;
  avatar?: string;
}

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const [user, setUser] = useState<UserData>({ name: 'Guest' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Retrieve user data from localStorage when component mounts
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const avatarUrl = event.target?.result as string;
        
        // Update user data with new avatar
        const updatedUser = {
          ...user,
          avatar: avatarUrl
        };
        
        setUser(updatedUser);
        
        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNavLinkClick = () => {
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };

  const navItems = [
    { to: "/dashboard", icon: <LayoutDashboard className="size-6" />, text: "Dashboard" },
    { to: "/administration", icon: <BriefcaseBusiness className="size-6 text-slate-100" />, text: "Administration" },
    { to: "/buynowpaylater", icon: <Clock10 className="size-6 text-slate-100" />, text: "Buy Now Pay Later" },
    { to: "/churchfinancial", icon: <Church className="size-6 text-slate-100" />, text: "Church Financial" },
    { to: "/hotelfinancial", icon: <Hotel className="size-6 text-slate-100" />, text: "Hotel Financial" },
    { to: "/realestate", icon: <House className="size-6 text-slate-100" />, text: "Real Estate" },
    { to: "/supermarket", icon: <ShoppingCart className="size-6 text-slate-100" />, text: "Super market" },
    { to: "/insurance", icon: <Shield className="size-6 text-slate-100" />, text: "Insurance" },
    { to: "/tax", icon: <Calendar className="size-6 text-slate-100" />, text: "Tax" },
    { to: "/businessfinancial", icon: <Handshake className="size-6 text-slate-100" />, text: "Business financial" },
    { to: "/schoolandpayment", icon: <GraduationCap className="size-6 text-slate-100" />, text: "School and payment" },
  ];

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-60 lg:w-44 md:w-32" : "w-0 md:w-14"
      } bg-[#226691] text-white transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden absolute top-0 left-0 h-screen z-50 md:relative`}
    >
      {/* Hidden file input for avatar upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Sidebar Header */}
      <div className="p-4 flex justify-between items-center">
        <div
          className={`flex flex-col items-center ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center cursor-pointer" onClick={handleAvatarClick}>
            <img
              src={user.avatar || profile}
              alt="User profile"
              className="w-14 h-14 rounded-full object-cover border-2 border-white hover:border-blue-300 transition-all"
              title="Click to change profile picture"
            />
          </div>
          <p className="text-sm font-bold mt-2 text-center">
            {user.name}{user.role && `, ${user.role}`}
          </p>
        </div>

        <button
          className="text-2xl focus:outline-none text-white flex-shrink-0"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>
      </div>

      {/* Sidebar Links */}
      <div className="flex-1 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex-1 p-2">
          {navItems.map((item, index) => (
            <li key={`nav-item-${index}`}>
              <NavLink
                to={item.to}
                onClick={handleNavLinkClick}
                className={({ isActive }) =>
                  `group flex items-center gap-3 p-2 ${
                    isActive
                      ? "bg-blue-900 shadow-md text-white"
                      : "hover:bg-blue-900 hover:shadow-md"
                  }`
                }
              >
                {item.icon}
                {isSidebarOpen && <span>{item.text}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;