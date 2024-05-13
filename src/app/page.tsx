import styles from "./page.module.css";
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titlebar}>
        <div className={styles.title}>
          Alex Moore
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.casestudies}>
          <div className={styles.casestudy1}>
            <div className={styles.casestudystub}>
              <div className={styles.casestudystubtext}>
                Refreshed UI for loading luggage  on a flight ✈️
              </div>
            </div>
            <div className={styles.casestudycontent1}>
              <Image 
                src="/images/loadsuccessmockup.png"
                width={570}
                height={840}
                alt='Mockup of a hand scanner displaying a load success screen'
              />
            </div>          
          </div>
          <div className={styles.casestudy2}>
            <div className={styles.casestudystub}>
              <div className={styles.casestudystubtext}>
                Telling the story of a lost bag 💼
              </div>
            </div>
            <div className={styles.casestudycontent2}>
              <Image 
                src="/images/bagsummarymockup.png"
                width={540}
                height={864}
                alt='Mockup of a phone showing a baggage tracking screen'
              />
            </div>          
          </div>
          <div className={styles.casestudy3}>
            <div className={styles.casestudystub}>
              <div className={styles.casestudystubtext}>
                TV displays to modernize the bag room  📺
              </div>
            </div>
            <div className={styles.casestudycontent3}>
              <Image 
                src="/images/bidsmockup.png"
                width={728}
                height={512}
                alt='Mockup of a tv information display'
              />
            </div>          
          </div>
        </div>
        <div className={styles.aboutme}>
          <div className={styles.aboutmecontent}>
            <div className={styles.aboutmetitle}>
              I am a UX designer and researcher specializing in complex systems.
            </div>
            <div className={styles.aboutmetext}>
              Unlike other designers, my background is not graphic design, branding, or animation. Instead, I come from the world of quantitative and qualitative research. This allows me to build streamlined interfaces that empower users to interact with complex systems in a way that makes sense to them.
            </div>
            <div className={styles.aboutmetext}>
            I am currently working at Brock Solutions, reshaping how airlines keep track of their bags. Normally, I call Canada home but I am currently exploring the incredible beauty of the Scottish lowlands.
            </div>
          </div>
          <Image
            src="/images/headshot.jpg"
            width={456}
            height={342}
            alt="Headshot"
          />
        </div>
        <div className={styles.skills}>
          <div className={styles.skillstitle}>
            What makes me different
          </div>
          <div className={styles.skillsrow}>
            <div className={styles.skillssection}>
              <div className={styles.skillssectiontitle}>
                Domain Knowledge
              </div>
              <div className={styles.skillssectiontext}>
                I do not like to create a general mockup and let the devs figure out the details. Instead I dive into the domain, and work with the team to figure out the details that make the difference.
              </div>
            </div>
            <div className={styles.skillssection}>
              <div className={styles.skillssectiontitle}>
                Psychological Research Methods
              </div>
              <div className={styles.skillssectiontext}>
                In university, I studied psychology and specialized in research methods. I use the foundations of my education to inform my UX research process where I focus on sound psychological measurement and variance-based statistical analysis.
              </div>
            </div>
            <div className={styles.skillssection}>
              <div className={styles.skillssectiontitle}>
                Facilitation
              </div>
              <div className={styles.skillssectiontext}>
                As a co-op student, I worked at a management consultancy where I routinely helped facilitate team meetings. This taught me the importance of facilitating meetings to enable meaningful participation and build buy-in to the end product.
              </div>
            </div>
          </div>
          <div className={styles.skillsrow}>
            <div className={styles.skillssection}>
              <div className={styles.skillssectiontitle}>
                Technical Skillset
              </div>
              <div className={styles.skillssectiontext}>
              I do my best work when I am embedded with my development team throughout the process. From the start of a project, I work to understand our codebase and am not afraid to put up a PR when I can.
              </div>
            </div>
            <div className={styles.skillssection}>
              <div className={styles.skillssectiontitle}>
                Systems Thinking
              </div>
              <div className={styles.skillssectiontext}>
                I like to work at the system level. Whether it is defining a new design pattern or creating a template for reporting research findings, I like to work in ways that empower those down the line to build off of what I have done.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footercontent}>
          <div className={styles.footertitle}>
            Alex Moore
          </div>
          <div className={styles.footerdetails}>
            <a className={styles.footertextstrong} href="mailto:alexandermoore202@gmail.com">
              alexandermoore202@gmail.com
            </a>
            <a className={styles.footertext} href="https://www.figma.com/design/7AF2r0eLmBXJNbAAsiSQ4a/Playground?node-id=564%3A2170&t=yjElnhbODa1ZYZcV-1" target="_blank">
              designed in figma
            </a>
            <a className={styles.footertext} href="https://github.com/AMoore202/alexmooredesign" target="_blank">
              developed using next.js
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
