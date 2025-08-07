import React from "react";
import { Link, useNavigate } from "react-router";
import UserDropdown from "./UserDropdown";
import { Button } from "../ui/Button";

export const Header = React.forwardRef(
  ({ isLandingPage = false, scrollToSection }, ref) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") || false;
    const ROLE = localStorage?.getItem("user")?.role || "Student";
    const navigate = useNavigate();
    return (
      <header
        className={`sticky top-0 gap-5 flex text-black p-4 h-[5rem] z-99 justify-between bg-white`}
        ref={ref}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">HowIStroll</h1>
          </div>
          {/* <div className="text-whit font-bold text-lg">{ROLE}</div> */}
        </div>
        <nav className=" max-md:hidden flex justify-end">
          <ul className="flex items-center w-full font-bold gap-3 ">
            {isLandingPage && (
              <>
                <li>
                  <Button
                    onClick={() => scrollToSection("home")}
                    className=" font-semibold text-[1rem] bg-transparent animationbtn"
                  >
                    Home
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("about")}
                    className=" font-semibold text-[1rem]  animationbtn"
                  >
                    Services
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="  font-semibold text-[1rem] animationbtn"
                  >
                    About
                  </Button>
                </li>
                {isAuthenticated && (
                  <li>
                  <Button
                    onClick={() => navigate("/internships")}
                    className="text-white  font-semibold text-[1rem] animationbtn"
                  >
                    Internships
                  </Button>
                </li>)}
              </>
            )}
            <li className="">
              {isAuthenticated && (
                <UserDropdown
                  userEmail={"Mohini"}
                  onLogout={() => {
                    localStorage.clear();
                    window.location.href = "/login";
                  }}
                  onProfile={() => alert("Go to Profile")}
                  onDashboard={() => alert("Go to Dashboard")}
                />
              )}
            </li>
          </ul>
        </nav>
        {isLandingPage && !isAuthenticated && (
          <div className="flex items-center w-full justify-end font-bold">
            <Link to={"/login"} href="/login" className=" animationbtn ">
              Login
            </Link>
          </div>
        )}
      </header>
    );
  }
);
