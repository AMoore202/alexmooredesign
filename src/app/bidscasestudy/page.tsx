/* eslint-disable react/no-unescaped-entities */
import styles from "../casestudies.module.css";
import bidsstyles from "./bidscasestudy.module.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "../ui/Footer";
import {
  CaretIcon,
  LoFiIdeationIcon,
  OnSiteIterationIcon,
  DesignAndDevIcon,
} from "../ui/Icons";

export default function Page() {
  return (
    <div className={styles.main}>
      <Link className={styles.breadcrumb} href="..">
        <CaretIcon className="" />
        <p className={styles.breadcrumbtext}>Back Home</p>
      </Link>
      <div className={bidsstyles.mockup}>
        <Image
          src="/images/bids/bidsmockup.png"
          className={styles.mockupimagedesktop}
          width={945}
          height={640}
          alt="Mockup of a tv information display"
          priority={true}
        />
        <Image
          src="/images/bids/bidsmockup.png"
          className={styles.mockupimagemobile}
          width={300}
          height={203}
          alt="Mockup of a tv information display"
          priority={true}
        />
      </div>
      <main className={styles.content}>
        <div className={styles.overview}>
          <h2 className={styles.overviewtitle}>Project Overview</h2>
          <div className={styles.overviewcontent}>
            <div className={styles.overviewdescription}>
              <p className={styles.overviewtext}>
                Baggage information displays (known in the industry as BIDs) are
                a common sight in any airport's bag room. These displays,
                however, are often outdated UIs showing a grid of numbers you
                need an guide to interpret. On this project my team and I wanted
                to create a modern BIDs system, one that was empowering for
                baggage handlers and provided them with the information they
                need to load bags intuitively and efficiently.
              </p>
            </div>
            <div className={styles.overviewlabelledvalues}>
              <div className={styles.overviewlabelledvalue}>
                <p className={styles.overviewlabel}>Role</p>
                <p className={styles.overviewvalue}>UX/UI Design</p>
              </div>
              <div className={styles.overviewlabelledvalue}>
                <p className={styles.overviewlabel}>Status</p>
                <p className={styles.overviewvalue}>In Production</p>
              </div>
              <div className={styles.overviewlabelledvalue}>
                <p className={styles.overviewlabel}>Time</p>
                <p className={styles.overviewvalue}>Q2-Q3 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectiontitle}>The Process</h2>
          <div className={styles.processvisual}>
            <div className={styles.processvisualstep}>
              <LoFiIdeationIcon className={styles.processvisualstepicon} />
              <p className={styles.processvisualsteptext}>
                Low-Fidelity Ideation
              </p>
            </div>
            <div className={styles.processvisualstep}>
              <OnSiteIterationIcon className={styles.processvisualstepicon} />
              <p className={styles.processvisualsteptext}>On-Site Iteration</p>
            </div>
            <div className={styles.processvisualstep}>
              <DesignAndDevIcon className={styles.processvisualstepicon} />
              <p className={styles.processvisualsteptext}>
                High-Fidelity Design and Development
              </p>
            </div>
          </div>
          <div className={styles.processsteps}>
            <div className={styles.processstep}>
              <div className={styles.processsteptitle}>
                <p className={styles.processsteptitlenumber}>01</p>
                <h3 className={styles.processsteptitletext}>
                  Low-Fidelity Ideation
                </h3>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <p className={styles.processsteptextparagraph}>
                    To kick off the design, I started by working in
                    low-fidelity. On this kind of project they are a multitude
                    of different pieces of information that could be presented
                    on the screen - and everyone has a different opinion on what
                    information is most important. To sort through the noise, I
                    wanted to be able to move things around fast and not have my
                    critique partners focused on the UI details. Using this
                    approach, I was able to put the focus on what kind of
                    decision each piece of information would drive allowing us
                    to pinpoint what was most important to a user and when that
                    information is valuable to them.
                  </p>
                </div>
                <div className={bidsstyles.processstepimagecontainer1}>
                  <Image
                    src="/images/bids/lofibidsmockup.png"
                    className={styles.processstepimage}
                    fill
                    sizes="(max-width: 1200px) 100vw, (min-width: 1201px) 32.5rem"
                    alt="Low fidelity baggage info display"
                  />
                </div>
              </div>
            </div>
            <div className={styles.processstep}>
              <div className={styles.processsteptitle}>
                <p className={styles.processsteptitlenumber}>02</p>
                <h3 className={styles.processsteptitletext}>
                  On-Site Iteration
                </h3>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <p className={styles.processsteptextparagraph}>
                    After spending a few weeks working through low-fidelity
                    designs, I had an idea of what was possible. However, in
                    order to put my ideas to the test, I needed to talk to some
                    users and for this project that meant heading to the tarmac.
                    Over the course of a week, I worked through the various bag
                    rooms of an airport, chatting with each airline about their
                    operation and what information they need to get the right
                    bags on the right flights.
                  </p>
                  <p className={styles.processsteptextparagraph}>
                    Testing out UI designs can be difficult while your users and
                    busy slinging bags. In order to make it easier and more
                    engaging for our participants, I printed out paper copies of
                    the low-fidelity mockups I had created in the previous step.
                    Allowing users to write directly on the paper made it more
                    accessible to them and easy for us to identify what they
                    focused on and what was just noise to them. Although each
                    airline had a different process, we were able to identify
                    commonality in key data points.
                  </p>
                </div>
                <div className={bidsstyles.processstepimagecontainer2}>
                  <Image
                    src="/images/bids/carousel.png"
                    className={styles.processstepimage}
                    fill
                    sizes="(max-width: 1200px) 100vw, (min-width: 1201px) 32.5rem"
                    alt="Photo of a baggage conveyor belt"
                  />
                </div>
              </div>
            </div>
            <div className={styles.processstep}>
              <div className={styles.processsteptitle}>
                <p className={styles.processsteptitlenumber}>03</p>
                <h3 className={styles.processsteptitletext}>
                  High-Fidelity Design and Development
                </h3>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <p className={styles.processsteptextparagraph}>
                    The on-site feedback and iteration gave us a wealth of
                    information to distill. At this point in the project I
                    started turning those insights into design patterns. For the
                    handoff documentation, I wanted to capture both the designs
                    specs and the user context that led to the design specs. By
                    capturing the user insights and design details in a unified
                    format, I was able to capture the intention of my designs
                    and allow more flexibility for the dev team in driving value
                    for the user.
                  </p>
                </div>
                <div className={bidsstyles.processstepimagecontainer3}>
                  <Image
                    src="/images/bids/bidsdesignbriefslide.png"
                    className={styles.processstepimage}
                    fill
                    sizes="(max-width: 1200px) 100vw, (min-width: 1201px) 32.5rem"
                    alt="Powerpoint slide depicting how bags are being loaded at a specific airport"
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
