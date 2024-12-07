"use client";

import styles from "./CaseStudyCards2.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CaseStudyCards2() {
  // const [imagesLoaded, setImagesLoaded] = useState(false);
  const [caseStudyImage1Loaded, setCaseStudyImage1Loaded] = useState(false);

  // const handleButtonClick = () => {
  //   setImagesLoaded(!imagesLoaded);
  //   console.log("Button Pressed");
  // };

  const handleImageLoad = () => {
    setCaseStudyImage1Loaded(true);
    console.log("Image Loaded");
  };

  const caseStudyContent = !caseStudyImage1Loaded ? (
    <div className={styles.casestudyplaceholder}>
      <Image
        src="/images/loadflight/loadsuccessmockup.png"
        layout="responsive"
        width={570}
        height={840}
        alt="Mockup of a hand scanner displaying a load success screen"
        priority
        onLoad={handleImageLoad}
      />
    </div>
  ) : (
    <div id="casestudies" className={styles.casestudies}>
      <Link
        className={`${styles.casestudy} ${styles.casestudyloadflight}`}
        href="./loadflightcasestudy"
      >
        <div
          className={`${styles.casestudystub} ${styles.casestudystubloadflight}`}
        >
          <p className={styles.casestudystubtext}>
            Refreshed UI for loading luggage on a flight ✈️
          </p>
        </div>
        <div
          className={`${styles.casestudycontent} ${styles.casestudycontentloadflight}`}
        >
          <div
            className={`${styles.casestudyimage} ${styles.casestudyimageloadflight}`}
          >
            <Image
              src="/images/loadflight/loadsuccessmockup.png"
              layout="responsive"
              width={570}
              height={840}
              alt="Mockup of a hand scanner displaying a load success screen"
              priority
              onLoad={handleImageLoad}
            />
          </div>
        </div>
      </Link>
      <Link
        className={`${styles.casestudy} ${styles.casestudybagsummary}`}
        href="./bagsummarycasestudy"
      >
        <div
          className={`${styles.casestudystub} ${styles.casestudystubbagsummary}`}
        >
          <p className={styles.casestudystubtext}>
            Telling the story of a lost bag 💼
          </p>
        </div>
        <div
          className={`${styles.casestudycontent} ${styles.casestudycontentbagsummary}`}
        >
          <div
            className={`${styles.casestudyimage} ${styles.casestudyimagebagsummary}`}
          >
            <Image
              src="/images/bagsummary/bagsummarymobilemockup.png"
              layout="responsive"
              width={540}
              height={864}
              alt="Mockup of a phone showing a baggage tracking screen"
              priority
            />
          </div>
        </div>
      </Link>
      <Link
        className={`${styles.casestudy} ${styles.casestudybids}`}
        href="./bidscasestudy"
      >
        <div className={`${styles.casestudystub} ${styles.casestudystubbids}`}>
          <p className={styles.casestudystubtext}>
            TV displays to modernize the bag room 📺
          </p>
        </div>
        <div
          className={`${styles.casestudycontent} ${styles.casestudycontentbids}`}
        >
          <div
            className={`${styles.casestudyimage} ${styles.casestudyimagebids}`}
          >
            <Image
              src="/images/bids/bidsmockup.png"
              layout="responsive"
              width={728}
              height={512}
              alt="Mockup of a tv information display"
            />
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <>
      {/* <button onClick={handleButtonClick}>Load Images</button> */}
      {caseStudyContent}
      {/* {imagesLoaded && (
        <div id="casestudies" className={styles.casestudies}>
          <Link
            className={`${styles.casestudy} ${styles.casestudyloadflight}`}
            href="./loadflightcasestudy"
          >
            <div
              className={`${styles.casestudystub} ${styles.casestudystubloadflight}`}
            >
              <p className={styles.casestudystubtext}>
                Refreshed UI for loading luggage on a flight ✈️
              </p>
            </div>
            <div
              className={`${styles.casestudycontent} ${styles.casestudycontentloadflight}`}
            >
              <div
                className={`${styles.casestudyimage} ${styles.casestudyimageloadflight}`}
              >
                <Image
                  src="/images/loadflight/loadsuccessmockup.png"
                  layout="responsive"
                  width={570}
                  height={840}
                  alt="Mockup of a hand scanner displaying a load success screen"
                  priority
                />
              </div>
            </div>
          </Link>
          <Link
            className={`${styles.casestudy} ${styles.casestudybagsummary}`}
            href="./bagsummarycasestudy"
          >
            <div
              className={`${styles.casestudystub} ${styles.casestudystubbagsummary}`}
            >
              <p className={styles.casestudystubtext}>
                Telling the story of a lost bag 💼
              </p>
            </div>
            <div
              className={`${styles.casestudycontent} ${styles.casestudycontentbagsummary}`}
            >
              <div
                className={`${styles.casestudyimage} ${styles.casestudyimagebagsummary}`}
              >
                <Image
                  src="/images/bagsummary/bagsummarymobilemockup.png"
                  layout="responsive"
                  width={540}
                  height={864}
                  alt="Mockup of a phone showing a baggage tracking screen"
                  priority
                />
              </div>
            </div>
          </Link>
          <Link
            className={`${styles.casestudy} ${styles.casestudybids}`}
            href="./bidscasestudy"
          >
            <div
              className={`${styles.casestudystub} ${styles.casestudystubbids}`}
            >
              <p className={styles.casestudystubtext}>
                TV displays to modernize the bag room 📺
              </p>
            </div>
            <div
              className={`${styles.casestudycontent} ${styles.casestudycontentbids}`}
            >
              <div
                className={`${styles.casestudyimage} ${styles.casestudyimagebids}`}
              >
                <Image
                  src="/images/bids/bidsmockup.png"
                  layout="responsive"
                  width={728}
                  height={512}
                  alt="Mockup of a tv information display"
                />
              </div>
            </div>
          </Link>
        </div>
      )} */}
    </>
  );
}
