import React from "react";
import avatar from "../assets/avatar.png";
import icon from "../assets/icon.png";

const menuItems = ["Dashboard", "Books", "Goals", "Community"];

const Navbar: React.FC = React.memo(() => (
  <nav className="w-full flex items-center border-g bg-[#FFFFFF] shadow-sm px-[40px] py-[12px]">
    {/* Left Side: Logo */}
    <div className="flex items-center font-bold text-[18px] text-blue-gray gap-[16px]">
      <img src={icon} alt="Logo Icon" className="w-4 h-4 mr-2" /> BookTracker
    </div>

    {/* Right Side: Menu Items + Notification + Avatar */}
    <div className="flex items-center gap-6 ml-auto">
      <ul className="flex gap-6 text-sm text-[#0D141C] gap-[36px]">
        {menuItems.map((item) => (
          <li key={item} className="hover:text-black cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
      <button
        className="relative flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-2xl w-[40px] h-[40px] overflow-visible"
        aria-label="Notifications"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 32 32"
          strokeWidth={2}
          stroke="currentColor"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] text-gray-600 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 27a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 16 27zm8-5V15a8 8 0 1 0-16 0v7a2 2 0 0 1-2 2h20a2 2 0 0 1-2-2z"
          />
        </svg>
      </button>
      <img
        src={avatar}
        alt="User Avatar"
        className="w-[40px] h-[40px] rounded-full object-cover"
      />
    </div>
  </nav>
));

export default Navbar;
