// "use client";

// import styles from "./PasswordModal.module.css";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { useEffect } from "react";

// interface PasswordModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   page: string;
// }

// export default function PasswordModal({
//   isOpen,
//   onClose,
//   page,
// }: PasswordModalProps) {
//   const [input, setInput] = useState("");
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (input === process.env.NEXT_PUBLIC_CASE_STUDY_PASSWORD) {
//       document.cookie = `caseStudyAccess=${input}; path=/`;
//       router.push(`/casestudy/${page}`);
//     } else {
//       alert("Incorrect password");
//     }
//   };

//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   if (!isOpen) {
//     return null;
//   }

//   const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if ((e.target as HTMLDivElement).id === "modal-overlay") {
//       onClose();
//     }
//   };

//   return (
//     <div
//       id="modal-overlay"
//       className={styles.modal}
//       onClick={handleOverlayClick}
//     >
//       <div className={styles.modalcontainer}>
//         <div className={styles.modalcopy}>
//           <h2 className={styles.title}>The good stuff awaits...</h2>
//           <p className={styles.instructiontext}>
//             <span>
//               Case studies are password-protected for confidentiality. Want to
//               take a look?
//             </span>
//             <Link href="mailto:alexandermoore202@gmail.com">
//               Shoot me an email!
//             </Link>
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <input
//             className={styles.input}
//             type="password"
//             placeholder="Password"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//           <button type="submit" className={styles.button}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import styles from "./PasswordModal.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PasswordModal() {
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
      // console.log("Redirecting to: ", redirectUrl);
    } else {
      setError("Incorrect password");
    }
  };

  return (
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
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
