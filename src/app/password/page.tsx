import PasswordModal from "../ui/PasswordModal";

export default function Page() {
  return <PasswordModal />;
}

// "use client";

// import styles from "./password.module.css";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function Page() {
//   const [input, setInput] = useState("");
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const password = process.env.CASE_STUDY_PASSWORD;
//   console.log("Password: ", password);
//   // console.log("Search Params Redirect Log:", searchParams.get("redirect"));

//   const redirectUrl =
//     searchParams.get("redirect") || "/casestudy/loadflightcasestudy";

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (input === password) {
//       document.cookie = `caseStudyAccess=${input}; path=/`;
//       console.log("Redirecting to: ", redirectUrl);
//       router.refresh();
//       setTimeout(() => {
//         router.replace(redirectUrl);
//       }, 500);
//     } else {
//       alert("Incorrect password");
//     }
//   };

//   return (
//     <div id="modal-overlay" className={styles.modal}>
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
