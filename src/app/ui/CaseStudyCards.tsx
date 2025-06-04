"use client";

import styles from "./CaseStudyCards.module.css";
import Image from "next/image";
import { useState } from "react";
import PasswordModal from "./PasswordModal";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "../lib/auth";
import Link from "next/link";

export default function CaseStudyCards() {
  const [caseStudyImage1Loaded, setCaseStudyImage1Loaded] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState("");
  const router = useRouter();

  const handleImageLoad = () => {
    setCaseStudyImage1Loaded(true);
    // console.log("Image Loaded");
  };

  const handleClick = (caseStudySlug: string) => {
    console.log("Modal opened");

    isAuthenticated().then((authenticated) => {
      if (authenticated) {
        router.push(`/casestudy/${caseStudySlug}`);
      } else {
        setSelectedCaseStudy(caseStudySlug);
        setShowPasswordModal(true);
      }
    });
  };

  const closeModal = () => setShowPasswordModal(false);

  const caseStudyContent = !caseStudyImage1Loaded ? (
    <div className={styles.casestudyplaceholder}>
      <Image
        src="/images/loadflight/loadsuccessmockup.webp"
        layout="responsive"
        width={570}
        height={840}
        alt="Mockup of a hand scanner displaying a load success screen"
        priority
        onLoad={handleImageLoad}
      />
      <Image
        src="/images/bagsummary/bagsummarymobilemockup.webp"
        layout="responsive"
        width={540}
        height={864}
        alt="Mockup of a phone showing a baggage tracking screen"
        priority
      />
      <Image
        src="/images/bids/bidsmockup.webp"
        layout="responsive"
        width={728}
        height={512}
        alt="Mockup of a tv information display"
      />
    </div>
  ) : (
    <div id="casestudies" className={styles.casestudies}>
      <PasswordModal
        isOpen={showPasswordModal}
        onClose={closeModal}
        page={selectedCaseStudy}
      />
      <div
        className={`${styles.casestudy} ${styles.casestudyloadflight}`}
        onClick={() => handleClick("loadflightcasestudy")}
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
              src="/images/loadflight/loadsuccessmockup.webp"
              layout="responsive"
              width={570}
              height={840}
              alt="Mockup of a hand scanner displaying a load success screen"
              priority
              onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.casestudy} ${styles.casestudybagsummary}`}
        onClick={() => handleClick("bagsummarycasestudy")}
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
              src="/images/bagsummary/bagsummarymobilemockup.webp"
              layout="responsive"
              width={540}
              height={864}
              alt="Mockup of a phone showing a baggage tracking screen"
              priority
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.casestudy} ${styles.casestudybids}`}
        onClick={() => handleClick("bidscasestudy")}
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
              src="/images/bids/bidsmockup.webp"
              layout="responsive"
              width={728}
              height={512}
              alt="Mockup of a tv information display"
            />
          </div>
        </div>
      </div>
      <div onClick={() => handleClick("mywork")} className={styles.linkbutton}>
        View more work...
      </div>
    </div>
  );

  return caseStudyContent;
}
