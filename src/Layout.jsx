import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function Layout() {
  const [dark, setDark] = useState(false);

  const clickToggle = () => {
    setDark((prev) => !prev);
  };
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <Navbar dark={dark} clickToggle={clickToggle} />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </div>
  );
}

export default Layout;
