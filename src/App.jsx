import "./App.css";
import { NotFound } from "./pages/NotFound";
import { Route, Routes } from "react-router";
import Home from "./pages/Landing/Home";
import { AuthLayout } from "./component/layouts/AuthLayout";
import { Layout } from "./component/layouts/Layout";

import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ServicePage } from "./pages/ServiceListing/ServicePage";


function App() {
  return (
    <Routes>
      
      <Route element={<Layout />}>
        <Route index element={<Home />} />  
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="service-provider/:serviceType" element={<ServicePage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
