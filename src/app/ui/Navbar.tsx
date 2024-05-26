"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    }

    useEffect(() => {
        const mobileNavItems = navRef.current;
        if (mobileNavItems) {
            if (menuOpen) {
                mobileNavItems.style.maxHeight = "140px";
                mobileNavItems.style.width = "132px";
                mobileNavItems.style.visibility = "visible";
                mobileNavItems.style.display = "flex";
                mobileNavItems.style.opacity = "1";
            } else {
                mobileNavItems.style.maxHeight = '0';
                mobileNavItems.style.opacity = '0';
                setTimeout(() => {
                    if (!menuOpen) {
                        mobileNavItems.style.width = '0';
                        mobileNavItems.style.visibility = 'hidden';
                        mobileNavItems.style.display = 'none';
                    }       
                }, 300); 
            }
        }
    }, [menuOpen]);

    return (
        <nav className={styles.nav}>
            <div className={styles.hamburgericon} onClick={toggleMenu}>
                <Image 
                    src="/icons/hamburger.svg" 
                    alt="Menu" 
                    width={22}
                    height={16}
                />
            </div>
            <div ref={navRef} className={`${styles.mobilenavitems} ${menuOpen ? styles.show : ''}`}>
                <Link href="#casestudies" onClick={closeMenu}>My Work</Link>
                <Link href="#aboutme" onClick={closeMenu}>About Me</Link>
                <Link href="#footer" onClick={closeMenu}>Contact</Link>
            </div>
            <div className={styles.desktopnavitems}>
                <Link href="#casestudies">My Work</Link>
                <Link href="#aboutme">About Me</Link>
                <Link href="#footer">Contact</Link>
            </div>
        </nav>
    );
}
