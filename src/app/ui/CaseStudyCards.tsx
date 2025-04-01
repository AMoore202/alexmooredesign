"use client";

import styles from "./CaseStudyCards.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import PasswordModal from "./PasswordModal";
import { useRouter } from "next/navigation";

export default function CaseStudyCards() {
  const [caseStudyImage1Loaded, setCaseStudyImage1Loaded] = useState(false);
  const router = useRouter();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState("");

  const handleImageLoad = () => {
    setCaseStudyImage1Loaded(true);
    // console.log("Image Loaded");
  };

  const handleClick = async (caseStudySlug: string) => {
    console.log("Modal opened");

    try {
      const res = await fetch("/api/check-auth", {
        credentials: "include",
      });
      const data = await res.json();

      console.log("Response data:", data);

      if (data.authenticated) {
        router.push(`/casestudy/${caseStudySlug}`);
      } else {
        setSelectedCaseStudy(caseStudySlug);
        setShowPasswordModal(true);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
    }
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
