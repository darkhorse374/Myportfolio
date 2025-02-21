"use client";

import { motion } from "motion/react";
import MenuBar from "./Menubar";

const Header = () => {
  return (
    <motion.header className="fixed top-0 md:mt-12 md:mr-12 right-0 z-20">
      <MenuBar />
    </motion.header>
  );
};

export default Header;