"use client";

import styles from "./CaseStudyCards.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PasswordModal from "./PasswordModal";

export default function CaseStudyCards() {
  const [caseStudyImage1Loaded, setCaseStudyImage1Loaded] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState("");

  const handleImageLoad = () => {
    setCaseStudyImage1Loaded(true);
    console.log("Image Loaded");
  };

  const openModal = (page: string) => {
    setSelectedCaseStudy(page);
    setShowPasswordModal(true);
  };
  const closeModal = () => setShowPasswordModal(false);

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
      <Image
        src="/images/bagsummary/bagsummarymobilemockup.png"
        layout="responsive"
        width={540}
        height={864}
        alt="Mockup of a phone showing a baggage tracking screen"
        priority
      />
      <Image
        src="/images/bids/bidsmockup.png"
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
        onClick={() => openModal("loadflightcasestudy")}
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
      </div>
      <div
        className={`${styles.casestudy} ${styles.casestudybagsummary}`}
        onClick={() => openModal("bagsummarycasestudy")}
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
      </div>
      <div
        className={`${styles.casestudy} ${styles.casestudybids}`}
        onClick={() => openModal("bidscasestudy")}
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
      </div>
    </div>
  );

  return caseStudyContent;
}
