/* eslint-disable react/no-unescaped-entities */
import styles from "../casestudies.module.css";
import bagsummarystyles from "./bagsummarycasestudy.module.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "../ui/Footer";
import {
  CaretIcon,
  UserVideoIcon,
  DesignCritiqueIcon,
  IterativeDevIcon,
} from "../ui/Icons";

export default function Page() {
  return (
    <div className={styles.main}>
      <Link className={styles.breadcrumb} href="..">
        <CaretIcon className="" />
        <p className={styles.breadcrumbtext}>Back Home</p>
      </Link>
      <div className={bagsummarystyles.mockup}>
        <Image
          src="/images/bagsummary/bagsummarymobilemockup.png"
          className={styles.mockupimagedesktop}
          width={391}
          height={626}
          alt="Mockup of a phone displaying the timeline of a lost bag"
          priority={true}
        />
        <Image
          src="/images/bagsummary/bagsummarydesktopmockup.png"
          className={styles.mockupimagedesktop}
          width={1039}
          height={639}
          alt="Mockup of a desktop displaying the timeline of a lost bag"
          priority={true}
        />
        <Image
          src="/images/bagsummary/bagsummarymobilemockup.png"
          className={styles.mockupimagemobile}
          width={333}
          height={533}
          alt="Mockup of a phone displaying the timeline of a lost bag"
          priority={true}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.overview}>
          <div className={styles.overviewtitle}>Project Overview</div>
          <div className={styles.overviewcontent}>
            <div className={styles.overviewdescription}>
              <div className={styles.overviewtext}>
                Baggage tracking is based on old messaging systems that cause
                confusion on a daily basis. For this project, my team was tasked
                with creating a page that would allow a user to understand what
                happened to a bag in 10 seconds or less. Using a new tech stack
                and an iterative approach, my team was able to build a simple UI
                that pulled out the most important pieces of information and
                presented them succinctly.
              </div>
            </div>
            <div className={styles.overviewlabelledvalues}>
              <div className={styles.overviewlabelledvalue}>
                <div className={styles.overviewlabel}>Role</div>
                <div className={styles.overviewvalue}>UX/UI Design</div>
              </div>
              <div className={styles.overviewlabelledvalue}>
                <div className={styles.overviewlabel}>Status</div>
                <div className={styles.overviewvalue}>Beta Testing</div>
              </div>
              <div className={styles.overviewlabelledvalue}>
                <div className={styles.overviewlabel}>Time</div>
                <div className={styles.overviewvalue}>Q3-Q4 2023</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectiontitle}>The Process</div>
          <div className={styles.processvisual}>
            <div className={styles.processvisualstep}>
              <UserVideoIcon className={styles.processvisualstepicon} />
              <div className={styles.processvisualsteptext}>
                Understanding the User
              </div>
            </div>
            <div className={styles.processvisualstep}>
              <DesignCritiqueIcon className={styles.processvisualstepicon} />
              <div className={styles.processvisualsteptext}>
                Design Critiques
              </div>
            </div>
            <div className={styles.processvisualstep}>
              <IterativeDevIcon className={styles.processvisualstepicon} />
              <div className={styles.processvisualsteptext}>
                Defining, Building, and Iterating
              </div>
            </div>
          </div>
          <div className={styles.processsteps}>
            <div className={styles.processstep}>
              <div className={styles.processsteptitle}>
                <div className={styles.processsteptitlenumber}>01</div>
                <div className={styles.processsteptitletext}>
                  Understanding the User
                </div>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <div className={styles.processsteptextparagraph}>
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
                  </div>
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
                <div className={styles.processsteptitlenumber}>02</div>
                <div className={styles.processsteptitletext}>
                  Design Critiques
                </div>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <div className={styles.processsteptextparagraph}>
                    During our research phase and beyond, I instituted a new
                    process for improving my designs. I wanted to ensure that my
                    team to give the best feedback possible so I began
                    familiarizing myself with the literature on design
                    critiques. Based on my readings, I found two key issues with
                    how I had been running my design reviews:
                  </div>
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
                  <div className={styles.processsteptextparagraph}>
                    Based on these learnings, I made a couple small tweaks to my
                    facilitation strategy and was able to unlock better insights
                    from my team. The new structured format allowed even the
                    junior members of my team to actively participate and give
                    me poignant feedback that ultimately allowed me to rapidly
                    improve my designs.
                  </div>
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
                <div className={styles.processsteptitlenumber}>03</div>
                <div className={styles.processsteptitletext}>
                  Defining, Building, and Iterating
                </div>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <div className={styles.processsteptextparagraph}>
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
                  </div>
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
      </div>
      <Footer />
    </div>
  );
}
