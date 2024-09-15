import styles from "../casestudies.module.css";
import loadflightstyles from "./loadflightcasestudy.module.css";
import Image from "next/image";
import Footer from "../ui/Footer";
import Link from "next/link";
import {
  DesignAuditIcon,
  DesignPrinciplesIcon,
  ExploratoryPrototypesIcon,
} from "../ui/Icons";

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={loadflightstyles.mockup}>
        <Image
          src="/images/loadflight/loadscandesktopsuccessmockup.png"
          className={styles.mockupimagedesktop}
          width={398}
          height={624}
          alt="Mockup of a hand scanner showing a success screen"
        />
        <Image
          src="/images/loadflight/loadscandesktopalertmockup.png"
          className={styles.mockupimagedesktop}
          width={398}
          height={624}
          alt="Mockup of a hand scanner showing an alert screen"
        />
        <Image
          src="/images/loadflight/loadscandesktopexceptionmockup.png"
          className={styles.mockupimagedesktop}
          width={398}
          height={624}
          alt="Mockup of a hand scanner showing an exception screen"
        />
        <Image
          src="/images/loadflight/loadsuccessmockup.png"
          className={styles.mockupimagemobile}
          width={271}
          height={398}
          alt="Mockup of a hand scanner showing a success screen"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.overview}>
          <div className={styles.overviewtitle}>Project Overview</div>
          <div className={styles.overviewcontent}>
            <div className={styles.overviewdescription}>
              <div className={styles.overviewtext}>
                At first glance, loading a flight might look like a straight
                forward activity: simply put the bags on the plane. However,
                once you get into the details you realize there are a number of
                factors that can throw wrench into the process. From passengers
                changing their flights last minute, to pilots updating the
                plane’s weight and balance requirements, to border control
                recalling already loaded bags, in practice loading a flight can
                quickly turn into complicated affair. To account for all of
                these complexities baggage handlers will use a handheld scanner
                to track each bag getting load onto the flight. For this
                project, I wanted to simplify the process for loading a bag,
                creating a UI that was intuitive, obvious, and fool proof.
              </div>
            </div>
            <div className={styles.overviewlabelledvalues}>
              <div className={styles.overviewlabelledvalue}>
                <div className={styles.overviewlabel}>Role</div>
                <div className={styles.overviewvalue}>UX/UI Design</div>
              </div>
              <div className={styles.overviewlabelledvalue}>
                <div className={styles.overviewlabel}>Status</div>
                <div className={styles.overviewvalue}>In Development</div>
              </div>
              <div className={styles.overviewlabelledvalue}>
                <div className={styles.overviewlabel}>Time</div>
                <div className={styles.overviewvalue}>Q1-Q2 2024</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectiontitle}>The Process</div>
          <div className={styles.processvisual}>
            <div className={styles.processvisualstep}>
              <DesignAuditIcon className={styles.processvisualstepicon} />
              <div className={styles.processvisualsteptext}>Design Audit</div>
            </div>
            <div className={styles.processvisualstep}>
              <DesignPrinciplesIcon className={styles.processvisualstepicon} />
              <div className={styles.processvisualsteptext}>
                Design Principles and Approaches
              </div>
            </div>
            <div className={styles.processvisualstep}>
              <ExploratoryPrototypesIcon
                className={styles.processvisualstepicon}
              />
              <div className={styles.processvisualsteptext}>
                Exploratory Prototypes
              </div>
            </div>
          </div>
          <div className={styles.processsteps}>
            <div className={styles.processstep}>
              <div className={styles.processsteptitle}>
                <div className={styles.processsteptitlenumber}>01</div>
                <div className={styles.processsteptitletext}>Design Audit</div>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <div className={styles.processsteptextparagraph}>
                    Our existing flow for loading a bag had been pieced together
                    over time as new requirements were added. To kick off this
                    project I wanted to scope out what was currently working
                    well and what needed to be improved, so I could take a fresh
                    stance on where the design should go. I started by loading
                    up my android emulator and working through all the
                    possibilities of what could happen while loading a bag.
                    During this process mapping exercise I built out a library
                    of the strengths and pain points that a user would
                    experience, and found the key areas I wanted to influence in
                    my design process. By narrowing the scope of what I wanted
                    to change to a few key principles, I was able to deliver a
                    simple message that was appealing to our customers in the
                    change management process.
                  </div>
                </div>
                <div className={loadflightstyles.processstepimagecontainer1}>
                  <Image
                    src="/images/loadflight/loadexceptiondesignaudit.png"
                    className={styles.processstepimage}
                    fill
                    sizes="(max-width: 1200px) 100vw, (min-width: 1201px) 32.5rem"
                    alt="Critique of an old load exception screen"
                  />
                </div>
              </div>
            </div>
            <div className={styles.processstep}>
              <div className={styles.processsteptitle}>
                <div className={styles.processsteptitlenumber}>02</div>
                <div className={styles.processsteptitletext}>
                  Design Principles and Approaches
                </div>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <div className={styles.processsteptextparagraph}>
                    My next step was to take the key learnings from the audit
                    and turn them into principles that could be applied
                    throughout the design process. Because the ecosystem for
                    loading a bag can change from operation to operation, I
                    focused on developing strong principles that could be
                    applied to different screens as the need arose. In
                    particular, I focused on defining:
                  </div>
                  <ol className={styles.processsteptextparagraph}>
                    <li>
                      <span className={loadflightstyles.boldparagraphtext}>
                        A consistent visual hierarchy.
                      </span>
                      &nbsp;Given how quickly baggage handlers move from one bag
                      to the next, I wanted all the information to be presented
                      in a structured format, so that users could pick up the
                      information they need quickly, regardless of the scenario.
                    </li>
                    <li>
                      <span className={loadflightstyles.boldparagraphtext}>
                        A singular use of colour.
                      </span>
                      &nbsp;In the existing designs, more and more colour had
                      been added over the years to call attention to different
                      elements on the screen. This led to a busy display without
                      a clear point to focus on. In the updated design, I wanted
                      to limit our use of to the single purpose of informing our
                      user whether the scan was successful or not.
                    </li>
                  </ol>
                </div>
                <div className={loadflightstyles.processstepimagecontainer2}>
                  <Image
                    src="/images/loadflight/loadexceptionhierarchy.png"
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
                  Exploratory Prototypes
                </div>
              </div>
              <div className={styles.processstepcontent}>
                <div className={styles.processsteptext}>
                  <div className={styles.processsteptextparagraph}>
                    After I had developed a base approach for my designs, I
                    began designing iteratively, routinely testing out my
                    designs with our customers. An important piece of this
                    process was trying to replicate the experience of scanning
                    bag. Using some advanced prototyping techniques, I created a
                    mock scanner that was complete with a scan light and the
                    success and error sounds that the user would experience.
                    Initial figma prototypes were eventually turned into web
                    prototypes so that our research participants could test out
                    the design on their own phone.
                    <span className={loadflightstyles.desktop}>
                      &nbsp;Test it out yourself using the QR code below!
                    </span>
                    <span className={loadflightstyles.mobile}>
                      &nbsp;Test out the&nbsp;
                      <Link
                        className={styles.processsteptextparagraphstrong}
                        href="https://loadsuccessprototype.vercel.app/"
                        target="_blank"
                      >
                        load success prototype
                      </Link>
                      &nbsp;yourself!
                    </span>
                  </div>
                  <div className={loadflightstyles.qrcodeparagraph}>
                    <Image
                      src="/images/loadflight/loadsuccessprototypeqrcode.png"
                      width={256}
                      height={256}
                      alt="https://loadsuccessprototype.vercel.app/"
                    />
                  </div>
                </div>
                <div className={loadflightstyles.processstepimagecontainer3}>
                  <Image
                    src="/images/loadflight/baseloadscreenmockup.png"
                    className={styles.processstepimage}
                    fill
                    sizes="(max-width: 1200px) 100vw, (min-width: 1201px) 32.5rem"
                    alt="Mockup of the initial screen for loading a bag"
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
