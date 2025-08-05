import { Link, Outlet } from "react-router";
import { Header } from "./Header";
import { SkipBackIcon, StepBackIcon } from "lucide-react";

export const AuthLayout = () => {

  return (
    <>
      <main className="">
        <Outlet />
      </main>
    </>
  );
};