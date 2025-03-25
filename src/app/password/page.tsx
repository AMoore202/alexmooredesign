"use client";

import styles from "./password.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectUrl =
    searchParams.get("redirect") || "/casestudy/loadflightcasestudy";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/validate-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: input }),
    });

    if (res.ok) {
      router.refresh();
      setTimeout(() => {
        router.replace(redirectUrl);
      }, 500);
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div id="modal-overlay" className={styles.modal}>
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
    </Suspense>
  );
}
