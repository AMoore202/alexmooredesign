/* eslint-disable react/no-unescaped-entities */
import styles from "../../casestudies.module.css";
import bagsummarystyles from "./bagsummarycasestudy.module.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../ui/Footer";
import DesktopNavbar from "../../ui/DesktopNavbar";
import MobileNavbar from "../../ui/MobileNavbar";

export default function Page() {
  return (
    <div className={styles.main}>
      <DesktopNavbar />
      <MobileNavbar />
      <div className={bagsummarystyles.mockup}>
        <p className={styles.mockuptext} style={{ width: "23rem" }}>
          Telling the story of a lost bag 💼
        </p>
        <Image
          src="/images/bagsummary/bagsummarymobilemockup.webp"
          className={styles.mockupimagedesktop}
          style={{ marginTop: "26rem" }}
          width={648} // 540
          height={1037} // 864
          alt="Mockup of a phone showing a baggage tracking screen"
          priority
        />
        <Image
          src="/images/bagsummary/bagsummarymobilemockup.webp"
          className={styles.mockupimagemobile}
          width={333}
          height={533}
          alt="Mockup of a phone displaying the timeline of a lost bag"
          priority={true}
        />
      </div>
      <main className={styles.content}>
        <div className={styles.overview}>
          <h2 className={styles.overviewtitle}>Project Overview</h2>
          <div className={styles.overviewcontent}>
            <div className={styles.overviewdescription}>
              <p className={styles.overviewtext}>
                Baggage tracking is based on old messaging systems that cause
                confusion on a daily basis. For this project, my team was tasked
                with creating a page that would allow a user to understand what
                happened to a bag in 10 seconds or less. Using a new tech stack
                and an iterative approach, my team was able to build a simple UI
                that pulled out the most important pieces of information and
                presented them succinctly.
              </p>
            </div>
            <div className={styles.overviewlabelledvalues}>
              <div className={styles.overviewlabelledvalue}>
                <p className={styles.overviewlabel}>Role</p>
                <p className={styles.overviewvalue}>UX/UI Design</p>
              </div>
              <div className={styles.overviewlabelledvalue}>
                <p className={styles.overviewlabel}>Status</p>
                <p className={styles.overviewvalue}>Beta Testing</p>
              </div>
              <div className={styles.overviewlabelledvalue}>
                <p className={styles.overviewlabel}>Time</p>
                <p className={styles.overviewvalue}>Q3-Q4 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectiontitle}>The Process</h2>
          <div className={styles.processsteps}>
            <div className={styles.processstep}>
              <div className={styles.processsteptitle}>
                <p className={styles.processsteptitlenumber}>01</p>
                <h3 className={styles.processsteptitletext}>
                  Understanding the User
                </h3>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <p className={styles.processsteptextparagraph}>
                    Working as a small team (me, a product manager, and a
                    technical architect), we kicked off the project by diving
                    deep into our targeted user’s world. I led semi-structured
                    interviews remotely and on-site with call center operators,
                    customer service reps, and bag tracers to build up our
                    understanding of what information drives value for them.
                    Throughout these interviews, we built out a variety of
                    research artifacts such as personas, user-journey maps, and
                    wireframes. Beyond their face value, these artifacts
                    empowered us to build a shared understanding and language of
                    what we were trying to accomplish for our users.{" "}
                  </p>
                </div>
                <div className={bagsummarystyles.processstepimagecontainer1}>
                  <Image
                    src="/images/bagsummary/bagsummarypersona.png"
                    className={styles.processstepimage}
                    fill
                    sizes="(max-width: 1200px) 100vw, (min-width: 1201px) 32.5rem"
                    alt="Persona of a call centre agent"
                  />
                </div>
              </div>
            </div>
            <div className={styles.processstep}>
              <div className={styles.processsteptitle}>
                <p className={styles.processsteptitlenumber}>02</p>
                <h3 className={styles.processsteptitletext}>
                  Design Critiques
                </h3>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <p className={styles.processsteptextparagraph}>
                    During our research phase and beyond, I instituted a new
                    process for improving my designs. I wanted to ensure that my
                    team to give the best feedback possible so I began
                    familiarizing myself with the literature on design
                    critiques. Based on my readings, I found two key issues with
                    how I had been running my design reviews:
                  </p>
                  <ol className={styles.processsteptextparagraph}>
                    <li>
                      I wasn't explicit about design objectives at the beginning
                      of the design review.
                    </li>
                    <li>
                      We got to ideation before understanding what aspects of
                      the design were working well and which weren't.
                    </li>
                  </ol>
                  <p className={styles.processsteptextparagraph}>
                    Based on these learnings, I made a couple small tweaks to my
                    facilitation strategy and was able to unlock better insights
                    from my team. The new structured format allowed even the
                    junior members of my team to actively participate and give
                    me poignant feedback that ultimately allowed me to rapidly
                    improve my designs.
                  </p>
                </div>
                <div className={bagsummarystyles.processstepimagecontainer2}>
                  <Image
                    src="/images/bagsummary/designcritique.png"
                    className={styles.processstepimage}
                    fill
                    sizes="(max-width: 1200px) 100vw, (min-width: 1201px) 32.5rem"
                    alt="Mockup with sticky note critiques"
                  />
                </div>
              </div>
            </div>
            <div className={styles.processstep}>
              <div className={styles.processsteptitle}>
                <p className={styles.processsteptitlenumber}>03</p>
                <h3 className={styles.processsteptitletext}>
                  Defining, Building, and Iterating
                </h3>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <p className={styles.processsteptextparagraph}>
                    Once I had gotten to a good spot with the design, I began
                    working with my team to document the planned behaviour of
                    our feature. For this project we used&nbsp;
                    <Link
                      className={styles.processsteptextparagraphstrong}
                      href="https://cucumber.io/docs/gherkin/reference/"
                      target="_blank"
                    >
                      gherkin syntax
                    </Link>
                    . Gherkin is a form of pseudo-code that allows you to define
                    ‘Given-When-Then’ scenarios that are then tied to functions
                    within the actual code. This allows for human readable
                    documentation that can be used explicitly tested in the
                    code. Using gherkin took me a bit to wrap my head around - I
                    am used to defining my ideas visually as opposed to through
                    rules. However, I quickly fell in love with the practice. By
                    creating very concrete rules, I was putting my ideas down in
                    a way the devs could easily relate to and was able to build
                    joint ownership over the design and implementation.
                    Throughout the development process we would continually
                    update our documentation, ensuring our end product was
                    meeting the goals we set out at the beginning of the
                    project.
                  </p>
                </div>
                <div className={bagsummarystyles.processstepimagecontainer3}>
                  <Image
                    src="/images/bagsummary/gherkin.png"
                    className={styles.processstepimage}
                    fill
                    sizes="(max-width: 1200px) 100vw, (min-width: 1201px) 32.5rem"
                    alt="Example of gherkin software documentation syntax"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
