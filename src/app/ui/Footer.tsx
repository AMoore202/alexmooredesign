import Link from "next/link";
import styles from "@/app/ui/Footer.module.css";

export default function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <div className={styles.footercontent}>
        <div className={styles.footertitle}>Alex Moore</div>
        <div className={styles.footerdetails}>
          <Link href="mailto:alexandermoore202@gmail.com">
            <span className={styles.footertextstrong}>
              alexandermoore202@gmail.com
            </span>
          </Link>
          <Link
            href="https://www.figma.com/design/7AF2r0eLmBXJNbAAsiSQ4a/Playground?node-id=564%3A2170&t=yjElnhbODa1ZYZcV-1"
            target="_blank"
          >
            <span className={styles.footertext}>designed in figma</span>
          </Link>
          <Link
            href="https://github.com/AMoore202/alexmooredesign"
            target="_blank"
          >
            <span className={styles.footertext}>developed with next.js</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
