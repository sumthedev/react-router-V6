import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";

export const RootLayout = () => {
  return (
    <>
      <header>
        <nav>
          <h1>React Router-v6 Practice</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <BreadCrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
