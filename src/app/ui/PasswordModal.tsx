"use client";

import styles from "./PasswordModal.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { checkPassword } from "@/app/lib/auth";

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  page: string;
}

export default function PasswordModal({
  isOpen,
  onClose,
  page,
}: PasswordModalProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await checkPassword(input);

    if (isValid) {
      localStorage.setItem("c917c5c643654e79a8dfbb6788b7866f", "true");
      router.replace(`/casestudy/${page}`);
    } else {
      setError("Incorrect password");
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className={styles.modal}
      onClick={handleOverlayClick}
    >
      <div className={styles.modalcontainer}>
        <div className={styles.modalcopy}>
          <h2 className={styles.title}>The good stuff awaits...</h2>
          <p className={styles.instructiontext}>
            <span>
              Case studies are password-protected for confidentiality. Want to
              take a look?
            </span>
            <Link href="mailto:alexandermoore202@gmail.com">
              Shoot me an email!
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputwrapper}>
            <input
              className={`${styles.input} ${error ? styles.inputError : ""}`}
              type="password"
              placeholder="Password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {error && <p className={styles.error}>{error}</p>}
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
