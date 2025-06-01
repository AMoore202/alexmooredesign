"use client";

import styles from "./home.module.css";
import Image from "next/image";
import DesktopNavbar from "./ui/DesktopNavbar";
import MobileNavbar from "./ui/MobileNavbar";
import Footer from "./ui/Footer";
import CaseStudyCards from "./ui/CaseStudyCards";

export default function Home() {
  return (
    <main className={styles.main}>
      <DesktopNavbar />
      <MobileNavbar />
      <div className={styles.titlebar}>
        <h1 className={styles.title}>Alex Moore</h1>
      </div>
      <div className={styles.content}>
        <CaseStudyCards />
        <div id="aboutme" className={styles.aboutme}>
          <div className={styles.aboutmecontent}>
            <p className={styles.aboutmetitle}>
              I am a UX designer and researcher specializing in complex systems.
            </p>
            <p className={styles.aboutmetext}>
              Unlike other designers, my background is not graphic design,
              branding, or animation. Instead, I come from the world of
              quantitative and qualitative research. This allows me to build
              streamlined interfaces that empower users to interact with complex
              systems in a way that makes sense to them.
            </p>
            <p className={styles.aboutmetext}>
              I am currently working at Brock Solutions, reshaping how airlines
              keep track of their bags. I have recently returned back to Canada
              after spending a wonderful year abroad, living in Scotland.
            </p>
          </div>
          <div className={styles.aboutmeimage}>
            <Image
              src="/images/headshot.jpg"
              layout="responsive"
              width={456}
              height={342}
              alt="Headshot"
            />
          </div>
        </div>
        <div className={styles.skills}>
          <h2 className={styles.skillstitle}>What makes me different</h2>
          <div className={styles.skillscontent}>
            <div className={styles.skillssection}>
              <p className={styles.skillssectiontitle}>Domain Knowledge</p>
              <p className={styles.skillssectiontext}>
                I do not like to create a general mockup and let the devs figure
                out the details. Instead I dive into the domain, and work with
                the team to figure out the details that make the difference.
              </p>
            </div>
            <div className={styles.skillssection}>
              <p className={styles.skillssectiontitle}>
                Psychological Research Methods
              </p>
              <p className={styles.skillssectiontext}>
                In university, I studied psychology and specialized in research
                methods. I use the foundations of my education to inform my UX
                research process where I focus on sound psychological
                measurement and variance-based statistical analysis.
              </p>
            </div>
            <div className={styles.skillssection}>
              <p className={styles.skillssectiontitle}>Facilitation</p>
              <p className={styles.skillssectiontext}>
                As a co-op student, I worked at a management consultancy where I
                routinely helped facilitate team meetings. This taught me the
                importance of facilitating meetings to enable meaningful
                participation and build buy-in to the end product.
              </p>
            </div>
            <div className={styles.skillssection}>
              <p className={styles.skillssectiontitle}>Technical Skillset</p>
              <p className={styles.skillssectiontext}>
                I do my best work when I am embedded with my development team
                throughout the process. From the start of a project, I work to
                understand our codebase and am not afraid to put up a PR when I
                can.
              </p>
            </div>
            <div className={styles.skillssection}>
              <p className={styles.skillssectiontitle}>Systems Thinking</p>
              <p className={styles.skillssectiontext}>
                I like to work at the system level. Whether it is defining a new
                design pattern or creating a template for reporting research
                findings, I like to work in ways that empower those down the
                line to build off of what I have done.
              </p>
            </div>
            <div className={styles.skillssection}>
              <p className={styles.skillssectiontitle}>Prototyping</p>
              <p className={styles.skillssectiontext}>
                We are currently in the golden age of being able to use actual
                code to test and communicate designs. Before my design phase is
                finished I make a point of building something that a true taste
                of what it will be like to use the software.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
