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

// import { Link } from "react-router-dom"; // Correct import for Link
import profile from "./profile_small.jpg"; // Adjust the path to your logo
import { NavLink } from "react-router-dom";
interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={`${
        isSidebarOpen ? "w-60 lg:w-44 md:w-32" : "w-0 md:w-14"
      } bg-[#226691] text-white transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden absolute top-0 left-0 h-screen z-50 md:relative`}
    >
      {/* Sidebar Header (Toggle Menu Icon for Larger Devices) */}
      <div className="p-4 flex justify-between items-center">
        {/* Left side - Profile image and text */}
        <div
          className={`flex flex-col items-center ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center">
            <img
              src={profile}
              alt="profile_small"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <p className="text-sm font-bold mt-2 text-center">
            David Williams Art Director
          </p>
        </div>

        {/* Right side - Toggle button (always visible) */}
        <button
          className="text-2xl focus:outline-none text-white flex-shrink-0"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>
      </div>

      {/* Sidebar Links */}
      {/* Sidebar Links - Added scrollable container */}
      <div className="flex-1 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex-1 p-2">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `group flex items-center gap-3 p-2 ${
                  isActive
                    ? "bg-blue-900 shadow-md"
                    : "hover:bg-blue-900 hover:shadow-md"
                }`
              }
            >
              {/* Icon */}
              <LayoutDashboard className=" size-6" />

              {/* Conditional Text */}
              {isSidebarOpen && <span>Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/administration"
              className={({ isActive }) =>
                `group flex items-center gap-3 p-2 ${
                  isActive
                    ? "bg-blue-900 shadow-md text-white"
                    : "hover:bg-blue-900 hover:shadow-md"
                }`
              }
            >
              {/* Icon */}
              <BriefcaseBusiness className=" size-6 text-slate-100 " />

              {/* Conditional Text */}
              {isSidebarOpen && <span> Administration</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buynowpaylater"
              className={({ isActive }) =>
                `group flex items-center gap-3 p-2 ${
                  isActive
                    ? "bg-blue-900 shadow-md text-white"
                    : "hover:bg-blue-900 hover:shadow-md"
                }`
              }
            >
              {/* Icon */}
              <Clock10 className=" size-6 text-slate-100 " />

              {/* Conditional Text */}
              {isSidebarOpen && <span> Buy Now Pay Later</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/churchfinancial"
              className={({ isActive }) =>
                `group flex items-center gap-3 p-2 ${
                  isActive
                    ? "bg-blue-900 shadow-md text-white"
                    : "hover:bg-blue-900 hover:shadow-md"
                }`
              }
            >
              {/* Icon */}
              <Church className=" size-6 text-slate-100 " />

              {/* Conditional Text */}
              {isSidebarOpen && <span>Church Financial</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hotelfinancial"
              className={({ isActive }) =>
                `group flex items-center gap-3 p-2 ${
                  isActive
                    ? "bg-blue-900 shadow-md text-white"
                    : "hover:bg-blue-900 hover:shadow-md"
                }`
              }
            >
              {/* Icon */}
              <Hotel className=" size-6 text-slate-100 " />

              {/* Conditional Text */}
              {isSidebarOpen && <span>Hotel Financial</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/realestate"
              className={({ isActive }) =>
                `group flex items-center gap-3 p-2 ${
                  isActive
                    ? "bg-blue-900 shadow-md text-white"
                    : "hover:bg-blue-900 hover:shadow-md"
                }`
              }
            >
              {/* Icon */}
              <House className=" size-6 text-slate-100 " />

              {/* Conditional Text */}
              {isSidebarOpen && <span>Real Etate</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/supermarket"
              className={({ isActive }) =>
                `group flex items-center gap-3 p-2 ${
                  isActive
                    ? "bg-blue-900 shadow-md text-white"
                    : "hover:bg-blue-900 hover:shadow-md"
                }`
              }
            >
              {/* Icon */}
              <ShoppingCart className=" size-6 text-slate-100 " />

              {/* Conditional Text */}
              {isSidebarOpen && <span>Super Market</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/insurance"
              className={({ isActive }) =>
                `group flex items-center gap-3 p-2 ${
                  isActive
                    ? "bg-blue-900 shadow-md text-white"
                    : "hover:bg-blue-900 hover:shadow-md"
                }`
              }
            >
              {/* Icon */}
              <Shield className=" size-6 text-slate-100 " />

              {/* Conditional Text */}
              {isSidebarOpen && <span>Insurance</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tax"
              className={({ isActive }) =>
                `group flex items-center gap-3 p-2 ${
                  isActive
                    ? "bg-blue-900 shadow-md text-white"
                    : "hover:bg-blue-900 hover:shadow-md"
                }`
              }
            >
              {/* Icon */}
              <Calendar className="size-6 text-slate-100 " />

              {/* Conditional Text */}
              {isSidebarOpen && <span>Tax</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/businessfinancial"
              className={({ isActive }) =>
                `group flex items-center gap-3 p-2 ${
                  isActive
                    ? "bg-blue-900 shadow-md text-white"
                    : "hover:bg-blue-900 hover:shadow-md"
                }`
              }
            >
              {/* Icon */}
              <Handshake className=" size-6 text-slate-100 " />

              {/* Conditional Text */}
              {isSidebarOpen && <span> Business Financial</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/schoolandpayment"
              className={({ isActive }) =>
                `group flex items-center gap-3 p-2 ${
                  isActive
                    ? "bg-blue-900 shadow-md text-white"
                    : "hover:bg-blue-900 hover:shadow-md"
                }`
              }
            >
              {/* Icon */}
              <GraduationCap className=" size-6 text-slate-100 " />

              {/* Conditional Text */}
              {isSidebarOpen && <span> Schools And Payment</span>}
            </NavLink>
          </li>        
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
