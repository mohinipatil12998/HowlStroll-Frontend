import {
  CircleUser,
  LayoutDashboard,
  LogOut,
  WorkflowIcon,
  PawPrint
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const UserDropdown = ({
  userEmail = "user@example.com",
  userName = "Mohini Mahajan",
  profileImageUrl = "",
  onLogout,
  onDashboard,
  onAddPets,
  onAddTraits,
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

  const closeDropdown = () => setOpen(false);

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
        <span className="">{userName}</span>
      </div>

      {open && (
        <div className="absolute right-0 mt-5 w-48 bg-white rounded shadow-lg ring-1 ring-black ring-opacity-5 z-50 divide-y divide-gray-100">
          <div className="p-2">
          
            <button
              onClick={() => { onAddPets(); closeDropdown(); }}
              className="group flex items-center w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 rounded-md transition-colors"
            >
              <PawPrint className="mr-2 h-4 w-4 group-hover:text-indigo-600 transition-colors" />
              Add Pets
            </button>

            
            <button
              onClick={() => { onAddTraits(); closeDropdown(); }}
              className="group flex items-center w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 rounded-md transition-colors"
            >
              <WorkflowIcon className="mr-2 h-4 w-4 group-hover:text-indigo-600 transition-colors" />
              Add Traits
            </button>
            <button
              onClick={() => {onDashboard(); closeDropdown(); }}
              className="group flex items-center w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 rounded-md transition-colors"
            >
              <LayoutDashboard className="mr-2 h-4 w-4 group-hover:text-indigo-600 transition-colors" />
              Dashboard
            </button>
          </div>
          <div className="p-2">
            <button
              onClick={() => { onLogout(); closeDropdown(); }}
              className="group flex items-center w-full text-start px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded-md transition-colors"
            >
              <LogOut className="mr-2 h-4 w-4 group-hover:text-red-600 transition-colors" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default UserDropdown;
