import {
  CircleUser,
  LayoutDashboard,
  LogOut,
  WorkflowIcon,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const UserDropdown = ({
  userEmail = "user@example.com",
  userName = "Mohini Mahajan",
  profileImageUrl = "",
  onLogout,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const userInitial = userEmail?.charAt(0)?.toUpperCase() || "U";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="flex items-center space-x-2 cursor-pointer">
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-semibold"
          title={userEmail}
        >
          {profileImageUrl ? <img src={profileImageUrl} /> : userInitial}
        </div>
        <span className="text-white">{userName}</span>
      </div>

      {open && (
        <div className="absolute right-0 mt-5 w-40 bg-white rounded shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <button
            onClick={onLogout}
            className="block w-full text-start  px-4 py-2 text-sm text-red-600 hover:bg-red-100  hover: rounded"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
