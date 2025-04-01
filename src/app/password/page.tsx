"use client";

import styles from "./password.module.css";
import modalStyles from "@/app/ui/PasswordModal.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PageContent() {
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
    <div id="modal-overlay" className={styles.modal}>
      <div className={styles.modalcontainer}>
        <div className={modalStyles.modalcopy}>
          <h2 className={modalStyles.title}>The good stuff awaits...</h2>
          <p className={modalStyles.instructiontext}>
            <span>
              Case studies are password-protected for confidentiality. Want to
              take a look?
            </span>
            <Link href="mailto:alexandermoore202@gmail.com">
              Shoot me an email!
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className={modalStyles.form}>
          <div className={modalStyles.inputwrapper}>
            <input
              className={`${modalStyles.input} ${
                error ? modalStyles.inputError : ""
              }`}
              type="password"
              placeholder="Password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {error && <p className={modalStyles.error}>{error}</p>}
          </div>
          <button type="submit" className={modalStyles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>} key={Math.random()}>
      <PageContent />
    </Suspense>
  );
}
