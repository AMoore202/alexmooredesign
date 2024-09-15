import Link from "next/link";
import styles from "./DesktopNavbar.module.css";

export default function DesktopNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navitems}>
        <Link href="#casestudies">My Work</Link>
        <Link href="#aboutme">About Me</Link>
        <Link href="#footer">Contact</Link>
      </div>
    </nav>
  );
}
