"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./MobileNavbar.module.css";
import { motion } from "framer-motion";
import { CloseIcon, HamburgerIcon } from "./Icons";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navlinks = (
    <motion.div
      className={styles.navitems}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
    >
      <Link className={styles.navitem} href="/" onClick={closeMenu}>
        Home
      </Link>
      <Link
        className={styles.navitem}
        href="https://drive.google.com/file/d/1WeH_3IOLAv4ElxBJxCaaKpjDLp5_NLK7/view?usp=sharing"
        target="_blank"
        onClick={closeMenu}
      >
        Resume
      </Link>
      <Link className={styles.navitem} href="#footer" onClick={closeMenu}>
        Contact
      </Link>
    </motion.div>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarcontent} onClick={toggleMenu}>
          {menuOpen ? (
            <CloseIcon className={styles.closeicon} />
          ) : (
            <HamburgerIcon className={styles.hamburgericon} />
          )}
        </div>
      </nav>
      {menuOpen && navlinks}
    </>
  );
}
