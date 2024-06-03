/* eslint-disable react/no-unescaped-entities */
import styles from "./bidscasestudy.module.css";
import Image from "next/image";
import Footer from "../ui/Footer";
import LoFiIdeationIcon from "../ui/icons/lofiideationicon";
import OnSiteIterationIcon from "../ui/icons/OnSiteIterationIcon";
import DesignAndDevIcon from "../ui/icons/DesignAndDevIcon";

export default function Page() {
  return(
    <div className={styles.main}>
      <div className={styles.mockup}>
        <div className={styles.bidsmockup}>
          <Image 
            src="/images/bidsmockup.png"
            layout="responsive"
            width={945}
            height={640}
            alt='Mockup of a tv information display'
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.overview}>
          <div className={styles.overviewtitle}>
            Project Overview
          </div>
          <div className={styles.overviewcontent}>
            <div className={styles.overviewdescription}>
              <div className={styles.overviewtext}>
                Baggage information displays (known in the industry as BIDs) are a common sight in any airport's bag room. These displays, however, are often outdated UIs showing a grid of numbers your need an guide to interpret. On this project my team and I wanted to create a modern BIDs system, one that was empowering for baggage handlers and provided them with the  information they need to load bags intuitively and efficiently.
              </div>
            </div>
            <div className={styles.overviewlabelledvalues}>
              <div className={styles.overviewlabelledvalue}>
                <div className={styles.overviewlabel}>Role</div>
                <div className={styles.overviewvalue}>UX/UI Design</div>
              </div>
              <div className={styles.overviewlabelledvalue}>
                <div className={styles.overviewlabel}>Status</div>
                <div className={styles.overviewvalue}>In Production</div>
              </div>
              <div className={styles.overviewlabelledvalue}>
                <div className={styles.overviewlabel}>Time</div>
                <div className={styles.overviewvalue}>Q2-Q3 2023</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
            <div className={styles.sectiontitle}>The Process</div>
            <div className={styles.processvisual}>
              <div className={styles.processvisualstep}>
                <LoFiIdeationIcon className={styles.processvisualstepicon} />
                <div className={styles.processvisualsteptext}>Low-Fidelity Ideation</div>
              </div>
              <div className={styles.processvisualstep}>
                <OnSiteIterationIcon className={styles.processvisualstepicon} />
                <div className={styles.processvisualsteptext}>On-Site Iteration</div>
              </div>
              <div className={styles.processvisualstep}>
                <DesignAndDevIcon className={styles.processvisualstepicon} />
                <div className={styles.processvisualsteptext}>High-Fidelity Design and Development</div>
              </div>
            </div>
            <div className={styles.processsteps}>
              <div className={styles.processstep}>
                <div className={styles.processsteptitle}>
                  <div className={styles.processsteptitlenumber}>01</div>
                  <div className={styles.processsteptitletext}>Low-Fidelity Ideation</div>
                </div>
                <div className={styles.processstepcontent}>
                  <div className={styles.processsteptext}>
                    <div className={styles.processsteptextparagraph}>
                      To kick off the design, I started by working in low-fidelity. On this kind of project they are a multitude of different pieces of information that could be presented on the screen - and everyone has a different opinion on what information is most important. To sort through the noise, I wanted to be able to move things around fast and not have my critique partners focused on the UI details. Using this approach, I was able to put the focus on what kind of decision each piece of information would drive allowing us to pinpoint what was most important to a user and when that information is valuable to them.
                    </div>
                  </div>
                  <div className={styles.processstepimage1}>
                    <Image
                      src="/images/lofibidsmockup.png"
                      className={styles.processstepimage1}
                      layout="responsive"
                      width={520}
                      height={288}
                      alt="Low fidelity baggage info display"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.processstep}>
                <div className={styles.processsteptitle}>
                  <div className={styles.processsteptitlenumber}>02</div>
                  <div className={styles.processsteptitletext}>On-Site Iteration</div>
                </div>
                <div className={styles.processstepcontent}>
                  <div className={styles.processsteptext}>
                    <div className={styles.processsteptextparagraph}>
                      After spending a few weeks working through low-fidelity designs, I had an idea of what was possible. However, in order to put my ideas to the test, I needed to talk to some users and for this project that meant heading to the tarmac. Over the course of a week, I worked through the various bag rooms of an airport, chatting with each airline about their operation and what information they need to get the right bags on the right flights.
                    </div>
                    <div className={styles.processsteptextparagraph}>
                      Testing out UI designs can be difficult while your users and busy slinging bags. In order to make it easier and more engaging for our participants, I printed out paper copies of the low-fidelity mockups I had created in the previous step. Allowing users to write directly on the paper made it more accessible to them and easy for us to identify what they focused on and what was just noise to them. Although each airline had a different process, we were able to identify commonality in key data points.
                    </div>
                  </div>
                  <div className={styles.processstepimage2}>
                    <Image
                      src="/images/carousel.png"
                      className={styles.processstepimage2}
                      layout="responsive"
                      width={520}
                      height={370}
                      alt="Photo of a baggage conveyor belt"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.processstep}>
                <div className={styles.processsteptitle}>
                  <div className={styles.processsteptitlenumber}>03</div>
                  <div className={styles.processsteptitletext}>High-Fidelity Design and Development</div>
                </div>
                <div className={styles.processstepcontent}>
                  <div className={styles.processsteptext}>
                    <div className={styles.processsteptextparagraph}>
                      The on-site feedback and iteration gave us a wealth of information to distill. At this point in the project I started turning those insights into design patterns. For the handoff documentation, I wanted to capture both the designs specs and the user context that led to the design specs. By capturing the user insights and design details in a unified format, I was able to capture the intention of my designs and allow more flexibility for the dev team in driving value for the user.
                    </div>
                  </div>
                  <div className={styles.processstepimage3}>
                    <Image
                      src="/images/bidsdesignbriefslide.png"
                      className={styles.processstepimage3}
                      layout="responsive"
                      width={520}
                      height={292}
                      alt="Powerpoint slide depicting how bags are being loaded at a specific airport"
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