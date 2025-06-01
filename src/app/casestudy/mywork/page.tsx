import styles from "./mywork.module.css";
import Image from "next/image";
import Footer from "../../ui/Footer";
import Link from "next/link";
import DesktopNavbar from "../../ui/DesktopNavbar";
import MobileNavbar from "../../ui/MobileNavbar";

export default function Page() {
  return (
    <main className={styles.main}>
      <DesktopNavbar />
      <MobileNavbar />
      <div className={styles.content}>
        <h1 className={styles.pagetitle}>My Work</h1>
        <div className={styles.section}>
          <div className={styles.description}>
            <h2 className={styles.sectiontitle}>SmartSuite Login Screen</h2>
            <p className={styles.summary}>
              Over the years, the login modal for the SmartSuite application had
              gotten a little stale and wasn’t capturing the feel of our brand.
              In my redesign, I wanted to create something that felt modern and
              professional. Additionally the old design loaded a heavy image
              that caused delays when on a slower network. In the new design I
              used an svg for the background graphic and layer blur on the side
              image, but reducing the amount of time needed to load.
            </p>
          </div>
          <div className={styles.mockupcontainer}>
            <div className={styles.selector}>
              <p className={styles.option}>New Design</p>
              <p className={styles.option}>Old Design</p>
            </div>
            <div className={styles.mockup}>
              <Image
                src="/images/work/smartsuiteloginnew.webp"
                fill
                alt="New SmartSuite Login Screen Design"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
