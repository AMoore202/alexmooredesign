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
          <div className={styles.casestudy}>
            <div className={styles.casestudystub}>
              <div className={styles.casestudystubtext}>
                Refreshed UI for loading luggage  on a flight ✈️
              </div>
            </div>
            <div className={styles.casestudycontent}>
              <Image 
                src="/images/loadsuccessmockup.png"
                width={570}
                height={840}
                alt='Mockup of a hand scanner displaying a load success screen'
              />
            </div>          
          </div>
          <div className={styles.casestudy}>
            <div className={styles.casestudystub}>
              <div className={styles.casestudystubtext}>
                Telling the story of a lost bag 💼
              </div>
            </div>
            <div className={styles.casestudycontent}>
              <Image 
                src="/images/loadsuccessmockup.png"
                width={570}
                height={840}
                alt='Mockup of a hand scanner displaying a load success screen'
              />
            </div>          
          </div>
          <div className={styles.casestudy}>
            <div className={styles.casestudystub}>
              <div className={styles.casestudystubtext}>
                TV displays to modernize the bag room  📺
              </div>
            </div>
            <div className={styles.casestudycontent}>
              <Image 
                src="/images/loadsuccessmockup.png"
                width={570}
                height={840}
                alt='Mockup of a hand scanner displaying a load success screen'
              />
            </div>          
          </div>
        </div>
      </div>
    </main>
  );
}
