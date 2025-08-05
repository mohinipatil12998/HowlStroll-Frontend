import { Navigate } from "react-router";

export const PrivateRoutes = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Replace with actual authentication logic
  return isAuthenticated ? children : <Navigate to="/login" />;
}