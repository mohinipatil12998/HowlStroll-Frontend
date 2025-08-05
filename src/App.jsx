import "./App.css";
import { NotFound } from "./pages/NotFound";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Landing/Home";
import { AuthLayout } from "./component/layouts/AuthLayout";
import { Layout } from "./component/layouts/Layout";
import { PrivateRoutes } from "./component/layouts/PrivateRoutes";

import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
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
