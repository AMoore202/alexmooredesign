"use client";

import styles from "./CaseStudyCards.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface CaseStudyCardProps {
  caseStudy: string;
  description: string;
  pageLink: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}

function CaseStudyCard({
  caseStudy,
  description,
  pageLink,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
}: CaseStudyCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const casestudystyle =
    caseStudy === "loadflight"
      ? styles["casestudyloadflight"]
      : caseStudy === "bagsummary"
      ? styles["casestudybagsummary"]
      : styles["casestudybids"];

  const casestudystubstyle =
    caseStudy === "loadflight"
      ? styles["casestudystubloadflight"]
      : caseStudy === "bagsummary"
      ? styles["casestudystubbagsummary"]
      : styles["casestudystubbids"];

  const casestudycontentstyle =
    caseStudy === "loadflight"
      ? styles["casestudycontentloadflight"]
      : caseStudy === "bagsummary"
      ? styles["casestudycontentbagsummary"]
      : styles["casestudycontentbids"];

  const casestudyimagestyle =
    caseStudy === "loadflight"
      ? styles["casestudyimageloadflight"]
      : caseStudy === "bagsummary"
      ? styles["casestudyimagebagsummary"]
      : styles["casestudyimagebids"];

  const imageloadedstyle = imageLoaded ? styles["imageloaded"] : "";

  return (
    <Link className={`${styles.casestudy} ${casestudystyle}`} href={pageLink}>
      <div className={`${styles.casestudystub} ${casestudystubstyle}`}>
        <p className={styles.casestudystubtext}>{description}</p>
      </div>
      <div className={`${styles.casestudycontent} ${casestudycontentstyle}`}>
        <div className={`${casestudyimagestyle} ${imageloadedstyle}`}>
          <Image
            src={imageSrc}
            alt=""
            width={imageWidth}
            height={imageHeight}
            style={{ display: "none" }}
            priority={true}
            onLoadingComplete={() => setImageLoaded(true)}
          />
          <Image
            src={imageSrc}
            layout="responsive"
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
            // className={imageloadedstyle}
            // priority={true}
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.5s ease-out",
            }}
          />
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudyCards() {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const caseStudies = [
    {
      id: 1,
      caseStudy: "loadflight",
      description: "Refreshed UI for loading luggage on a flight ✈️",
      pageLink: "./loadflightcasestudy",
      imageSrc: "/images/loadflight/loadsuccessmockup.png",
      imageAlt: "Mockup of a hand scanner displaying a load success screen",
      imageWidth: 570,
      imageHeight: 840,
    },
    {
      id: 2,
      caseStudy: "bagsummary",
      description: "Telling the story of a lost bag 💼",
      pageLink: "./bagsummarycasestudy",
      imageSrc: "/images/bagsummary/bagsummarymobilemockup.png",
      imageAlt: "Mockup of a phone showing a baggage tracking screen",
      imageWidth: 540,
      imageHeight: 864,
    },
    {
      id: 3,
      caseStudy: "bids",
      description: "TV displays to modernize the bag room 📺",
      pageLink: "./bidscasestudy",
      imageSrc: "/images/bids/bidsmockup.png",
      imageAlt: "Mockup of a tv information display",
      imageWidth: 728,
      imageHeight: 512,
    },
  ];

  useEffect(() => {
    const imagePromises = caseStudies.map(
      (casestudy) =>
        new Promise<number>((resolve, reject) => {
          const img = document.createElement("img");
          img.src = casestudy.imageSrc;
          img.onload = () => {
            setLoadedImages((prev) => new Set(prev).add(casestudy.id));
            resolve(casestudy.id);
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${casestudy.imageSrc}`);
            resolve(casestudy.id);
          };
        })
    );

    Promise.all(imagePromises).then(() => {
      setAllImagesLoaded(true);
    });
  }, []);

  return (
    <div
      className={`${styles.casestudies} ${
        allImagesLoaded ? styles.casestudiesloaded : ""
      }`}
    >
      {caseStudies.map((study) => (
        <CaseStudyCard
          key={study.id}
          caseStudy={study.caseStudy}
          description={study.description}
          pageLink={study.pageLink}
          imageSrc={study.imageSrc}
          imageAlt={study.imageAlt}
          imageWidth={study.imageWidth}
          imageHeight={study.imageHeight}
        />
      ))}
    </div>
  );
}
