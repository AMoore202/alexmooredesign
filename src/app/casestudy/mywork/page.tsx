"use client";

import styles from "./mywork.module.css";
import Footer from "../../ui/Footer";
import Link from "next/link";
import DesktopNavbar from "../../ui/DesktopNavbar";
import MobileNavbar from "../../ui/MobileNavbar";
import MockupSwitcher from "@/app/ui/MockupSwitcher";

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
          <MockupSwitcher
            mockups={[
              {
                label: "New Design",
                image: "/images/work/smartsuiteloginnew.webp",
                alt: "New SmartSuite Login Screen Design",
              },
              {
                label: "Old Design",
                image: "/images/work/smartsuiteloginold.webp",
                alt: "Old SmartSuite Login Screen Design",
              },
            ]}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
