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

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const handleNavLinkClick = () => {
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };

  const NavItem: React.FC<{
    to: string;
    icon: React.ReactNode;
    text: string;
  }> = ({ to, icon, text }) => (
    <li>
      <NavLink
        to={to}
        onClick={handleNavLinkClick}
        className={({ isActive }) =>
          `group flex items-center gap-3 p-2 ${
            isActive
              ? "bg-blue-900 shadow-md text-white"
              : "hover:bg-blue-900 hover:shadow-md"
          }`
        }
      >
        {icon}
        {isSidebarOpen && <span>{text}</span>}
      </NavLink>
    </li>
  );

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-60 lg:w-44 md:w-32" : "w-0 md:w-14"
      } bg-[#226691] text-white transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden absolute top-0 left-0 h-screen z-50 md:relative`}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex justify-between items-center">
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
          <NavItem
            to="/dashboard"
            icon={<LayoutDashboard className="size-6" />}
            text="Dashboard"
          />
          <NavItem
            to="/administration"
            icon={<BriefcaseBusiness className="size-6 text-slate-100" />}
            text="Administration"
          />
          <NavItem
            to="/buynowpaylater"
            icon={<Clock10 className="size-8 text-slate-100" />}
            text="Buy Now Pay Later"
          />
          <NavItem
            to="/churchfinancial"
            icon={<Church className="size-6 text-slate-100" />}
            text="Church Financial"
          />
          <NavItem
            to="/hotelfinancial"
            icon={<Hotel className="size-6 text-slate-100" />}
            text="Hotel Financial"
          />
          <NavItem
            to="/realestate"
            icon={<House className="size-6 text-slate-100" />}
            text="Real Estate"
          />
          <NavItem
            to="/supermarket"
            icon={<ShoppingCart className="size-6 text-slate-100" />}
            text="Super market"
          />
          <NavItem
            to="/insurance"
            icon={<Shield className="size-6 text-slate-100" />}
            text="Insurance"
          />
          <NavItem
            to="/tax"
            icon={<Calendar className="size-6 text-slate-100" />}
            text="Tax"
          />
          <NavItem
            to="/businessfinancial"
            icon={<Handshake className="size-6 text-slate-100" />}
            text="Business financial"
          />
          <NavItem
            to="/schoolandpayment"
            icon={<GraduationCap className="size-8 text-slate-100" />}
            text="School and payment"
          />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;