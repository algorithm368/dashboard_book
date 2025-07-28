import React from "react";
import avatar from "../assets/avatar.png"

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">
      {/* Left Side: Logo */}
      <div className="font-bold text-lg">BookTracker</div>

      {/* Center: Menu Items */}
      <ul className="flex gap-6 text-sm text-gray-700">
        <li className="hover:text-black cursor-pointer">Dashboard</li>
        <li className="hover:text-black cursor-pointer">Books</li>
        <li className="hover:text-black cursor-pointer">Goals</li>
        <li className="hover:text-black cursor-pointer">Community</li>
      </ul>

      {/* Right Side: Notification and Avatar */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-black bg-gray-100 p-[10px] rounded-[20px] w-fit">
          🔔
        </button>
        <img
          src={avatar}
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
}
