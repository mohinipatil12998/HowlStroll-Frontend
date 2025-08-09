import { forwardRef } from "react";
import { Link, useNavigate, } from "react-router";
import { Button } from "../ui/Button";
import UserDropdown from "./UserDropdown";

export const Header = forwardRef(
  (
    { isLandingPage = false, scrollToSection, isAuthenticated, onLogout, setIsAddPetsOpen, setIsAddTraitsOpen },
    ref
  ) => {
    const navigate = useNavigate();
    return (
      <>
      <header
        className={`flex items-center justify-between sticky top-0 text-black p-4 h-[5rem] z-50 bg-white shadow-md`}
        ref={ref}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">HowlStroll</h1>
          </div>
        </div>
        <nav className="max-md:hidden flex w-full ">
          <ul className="ml-auto flex flex-wrap items-center w-full font-bold gap-3 ">
            {isLandingPage && (
              <>
                <li>
                  <Button
                    onClick={() => scrollToSection("home")}
                    className=" font-semibold text-[1rem] bg-transparent animationbtn hover:text-indigo-600 transition-colors duration-300"
                  >
                    Home
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("how-it-works")}
                    className=" font-semibold text-[1rem]  animationbtn hover:text-indigo-600 transition-colors duration-300"
                  >
                    How It Works
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("features")}
                    className=" font-semibold text-[1rem]  animationbtn hover:text-indigo-600 transition-colors duration-300"
                  >
                    Features
                  </Button>
                </li>

                <li>
                  <Button
                    onClick={() => scrollToSection("services")}
                    className=" font-semibold text-[1rem]  animationbtn hover:text-indigo-600 transition-colors duration-300"
                  >
                    Services
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => scrollToSection("about")}
                    className="  font-semibold text-[1rem] animationbtn hover:text-indigo-600 transition-colors duration-300"
                  >
                    About
                  </Button>
                </li>
                </>)
            }
             {isLandingPage && !isAuthenticated && (
              <li className="ml-auto flex items-center font-bold">
                <Link
                  to={"/login"}
                  className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
                >
                  Login
                </Link>
              </li>
            )}
             {isAuthenticated && (
              <li className="ml-auto">
                <UserDropdown
                  userEmail={"Mohini"}
                  onLogout={onLogout}
                  onProfile={() => console.log("Go to Profile")}
                  onDashboard={() => navigate("/dashboard")}
                  onAddPets={() => setIsAddPetsOpen(true)}
                  onAddTraits={() => setIsAddTraitsOpen(true)}
                  
                />
              </li>
            )}
           
          </ul>
        </nav>
       
      </header>
      
      </>
    );
  }
);
