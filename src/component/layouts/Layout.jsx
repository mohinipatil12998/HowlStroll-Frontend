import { Outlet } from "react-router";
import { useRef } from "react";
import { Header } from "./Header";

export const Layout = () => {
  const headerRef = useRef(null);
  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight; // Get the actual height of the sticky header
      const offsetTop = targetElement.offsetTop - headerHeight; // Calculate scroll position
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth", // Smooth scroll animation
      });
    }
  };
  return (
    <>
      <Header
        ref={headerRef}
        scrollToSection={scrollToSection}
        isLandingPage={true}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
    </>
  );
};
