"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileNavbar.module.css";
import { motion } from "framer-motion";

export default function MobileNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const menuicon = <Image 
            src="/icons/hamburger.svg" 
            alt="Menu" 
            width={22}
            height={16}
        />

    const closeicon = <Image 
            src="/icons/close.svg" 
            alt="Close" 
            width={22}
            height={16}
        />

    const navlinks = <motion.div 
        className={styles.navitems} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 100 }}
    >
        <Link className={styles.navitem} href="#casestudies" onClick={closeMenu}>My Work</Link>
        <Link className={styles.navitem} href="#aboutme" onClick={closeMenu}>About Me</Link>
        <Link className={styles.navitem} href="#footer" onClick={closeMenu}>Contact</Link>
    </motion.div>

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.hamburgericon} onClick={toggleMenu}>
                    { menuOpen ? closeicon : menuicon }
                </div>
            </nav>
            { menuOpen && navlinks }
        </>
    );
}
