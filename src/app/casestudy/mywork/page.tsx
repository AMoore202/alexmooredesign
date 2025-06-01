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
                image: "/images/work/smartsuitelogin/newdesign.webp",
                alt: "New SmartSuite Login Screen Design",
              },
              {
                label: "Old Design",
                image: "/images/work/smartsuitelogin/olddesign.webp",
                alt: "Old SmartSuite Login Screen Design",
              },
            ]}
          />
        </div>
        <div className={styles.section}>
          <div className={styles.description}>
            <h2 className={styles.sectiontitle}>Virtual Record Collection</h2>
            <p className={styles.summary}>
              My mom and I are big music fans and have both started collecting
              vinyl. Records make the perfect gift for any occasion but it is
              always a challenge to know which records we each already have. As
              a fun side project, I designed an app that would serve as a
              digital copy of our record collections so we could easily see what
              we do and do not have.
            </p>
          </div>
          <MockupSwitcher
            mockups={[
              {
                label: "Collection Screen",
                image:
                  "/images/work/virtualrecordcollection/collectionscreen.webp",
                alt: "Screenshot of records in a collection",
              },
              {
                label: "Launch Screen",
                image: "/images/work/virtualrecordcollection/launchscreen.webp",
                alt: "Initial launch screen to choose a collection",
              },
              {
                label: "Empty State",
                image: "/images/work/virtualrecordcollection/emptystate.webp",
                alt: "Screenshot of an empty collection",
              },
            ]}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
