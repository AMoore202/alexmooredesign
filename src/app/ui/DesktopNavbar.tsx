import Link from "next/link";
import styles from "./DesktopNavbar.module.css";

export default function DesktopNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navitems}>
        <Link href="./">Home</Link>
        <Link
          href="https://drive.google.com/file/d/1WeH_3IOLAv4ElxBJxCaaKpjDLp5_NLK7/view?usp=sharing"
          target="_blank"
        >
          Resume
        </Link>
        <Link href="#footer">Contact</Link>
      </div>
    </nav>
  );
}
