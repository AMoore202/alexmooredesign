import styles from "./MockupSwitcher.module.css";
import Image from "next/image";
import { useState } from "react";

type Mockup = {
  label: string;
  image: string;
  alt: string;
};

type Props = {
  mockups: Mockup[];
};

export default function MockupSwitcher({ mockups }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedMockup = mockups[selectedIndex];

  return (
    <div className={styles.mockupcontainer}>
      <div className={styles.selector}>
        {mockups.map((mockup, index) => (
          <p
            key={index}
            className={`${styles.option} ${
              selectedIndex === index ? styles.selected : ""
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            {mockup.label}
          </p>
        ))}
      </div>
      <div className={styles.mockup}>
        <Image
          src={selectedMockup.image}
          fill
          alt={selectedMockup.alt}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
