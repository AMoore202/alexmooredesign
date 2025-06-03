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
              professional. Additionally, the old design loaded a heavy image
              that caused delays when on a slower network. In the new design I
              used an svg for the background graphic and layer blur on the side
              image, both reducing the time needed to load the page.
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
        <div className={styles.section}>
          <div className={styles.description}>
            <h2 className={styles.sectiontitle}>
              eBird Dashboard and Marketing Page
            </h2>
            <p className={styles.summary}>
              As a self-proclaimed bird nerd, I quite enjoy a weekend trail walk
              to see all the local birds. My go-to app for tracking the birds I
              see is eBird. As a design experiment a designed a dashboard for
              the app and also created a sample marketing page using the assets
              from the dashboard.
            </p>
            {/* to-do: add link to ebird */}
          </div>
          <MockupSwitcher
            mockups={[
              {
                label: "Dashboard",
                image: "/images/work/ebirddashboard/dashboard.webp",
                alt: "Sample dashboard for eBird showing recent sightings and stats",
              },
              {
                label: "Hero",
                image: "/images/work/ebirddashboard/hero.webp",
                alt: "Sample marketing page hero section for eBird",
              },
              {
                label: "Dashboard Marketing",
                image: "/images/work/ebirddashboard/dashboardmarketing.webp",
                alt: "Sample marketing page section showing the dashboard",
              },
            ]}
          />
        </div>
        <div className={styles.section}>
          <div className={styles.description}>
            <h2 className={styles.sectiontitle}>
              Sustainability Professional Personal Website
            </h2>
            <p className={styles.summary}>
              During my girlfriend’s post-masters job search I designed a
              personal website for her. As a sustainability specialist, I wanted
              to create a natural feeling website that subtly captured the
              attention to detail and professionalism she had developed from her
              work as a project manager.
            </p>
          </div>
          <MockupSwitcher
            mockups={[
              {
                label: "Hero",
                image: "/images/work/sustainability/hero.webp",
                alt: "Hero section of the personal website",
              },
              {
                label: "About Me",
                image: "/images/work/sustainability/aboutme.webp",
                alt: "About me section of the personal website",
              },
              {
                label: "Past Projects",
                image: "/images/work/sustainability/pastprojects.webp",
                alt: "Past projects section of the personal website",
              },
            ]}
          />
        </div>
        <div className={styles.section}>
          <div className={styles.description}>
            <h2 className={styles.sectiontitle}>
              Hockey Scores App Colour System
            </h2>
            <p className={styles.summary}>
              My buddy Dan got tired off having to watch ads in order to check
              the latest hockey scores so he built himself an app to keep him up
              to date on the latest games. Needing some help on the styling, he
              asked me to put together a colour scheme to use in his app.
            </p>
          </div>
          <MockupSwitcher
            mockups={[
              {
                label: "Sample Screen",
                image: "/images/work/hockeyscores/samplescreen.webp",
                alt: "Sample screen of the hockey scores app",
              },
              {
                label: "Colour System",
                image: "/images/work/hockeyscores/coloursystem.webp",
                alt: "Overview of the colour system used in the hockey scores app",
              },
            ]}
          />
        </div>
        <div className={styles.section}>
          <div className={styles.description}>
            <h2 className={styles.sectiontitle}>Bird Colour Schemes</h2>
            <p className={styles.summary}>
              Wanting to work on my skills making colour schemes, I used birds
              as a natural inspiration. For each bird, I created a hero section
              that not only used the bird’s colours, but also tried to capture
              the personality of the bird.
            </p>
          </div>
          <MockupSwitcher
            mockups={[
              {
                label: "Chestnut Sided Warbler",
                image: "/images/work/birds/chestnutsidedwarbler.webp",
                alt: "Sample hero section using the colours of a chestnut sided warbler",
              },
              {
                label: "Cedar Waxwing",
                image: "/images/work/birds/cedarwaxwing.webp",
                alt: "Sample hero section using the colours of a cedar waxwing",
              },
              {
                label: "Eurasian Magpie",
                image: "/images/work/birds/eurasianmagpie.webp",
                alt: "Sample hero section using the colours of a Eurasian magpie",
              },
            ]}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
