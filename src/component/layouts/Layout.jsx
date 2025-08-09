import { Outlet } from "react-router";
import { useRef, useState } from "react";
import { Header } from "./Header";
import { Modal } from "../ui/Modal";
import AddPets from "../../pages/ServiceListing/AddPets";
import { ServiceProviderTraitsForm } from "../../pages/ServiceListing/ServiceProviderTraitsForm";

export const Layout = ({ isLandingPage }) => {
  const [isAddPetsOpen, setIsAddPetsOpen] = useState(false);
  const [isAddTraitsOpen, setIsAddTraitsOpen] = useState(false);
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
  const isAuthenticated = localStorage.getItem("isAuthenticated"); // Replace with actual authentication logic
  return (
    <>
      <Header
        ref={headerRef}
        scrollToSection={scrollToSection}
        isLandingPage={isLandingPage}
        setIsAddPetsOpen={setIsAddPetsOpen}
        setIsAddTraitsOpen={setIsAddTraitsOpen}
        isAuthenticated={isAuthenticated}
      />
      <main className="flex-grow">
        <Outlet />
        <Modal
          show={isAddPetsOpen}
          onClose={() => setIsAddPetsOpen(false)}
          title={
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Add a New Pet
            </h2>
          }
        >
          <AddPets />
        </Modal>

        <Modal
          show={isAddTraitsOpen}
          onClose={() => setIsAddTraitsOpen(false)}
          title={
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Add Service Provider Traits
            </h2>
          }
        >
          <ServiceProviderTraitsForm />
        </Modal>
      </main>
    </>
  );
};
