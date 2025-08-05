import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { jwtDecode } from "jwt-decode";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getUserDataFromToken = () => {
  const token = localStorage.getItem("token"); // Or wherever your token is stored

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || "ROLE_STUDENT"; // Default to "Student" if role is not present
      const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] || null; // Default to null if userId is not present
      const email = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] || null; // Default to null if email is not present
      return {role, userId, email};
    } catch (error) {
      console.error("Error decoding JWT token:", error);
      return null;
    }
  }
  return null;
};
