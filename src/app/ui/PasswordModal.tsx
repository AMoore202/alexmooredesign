import styles from "./PasswordModal.module.css";
import Link from "next/link";

function LockIcon() {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.15918 6.2947H8.93191V4.44886C8.93191 3.13091 7.8635 2.0625 6.54554 2.0625C5.22759 2.0625 4.15918 3.13091 4.15918 4.44886V6.2947ZM10.1819 6.2947V4.44886C10.1819 2.44055 8.55385 0.8125 6.54554 0.8125C4.53724 0.8125 2.90918 2.44055 2.90918 4.44886V4.44886V6.2947H2C0.895431 6.2947 0 7.19014 0 8.29471V13.1836C0 14.2882 0.895431 15.1836 2 15.1836H10.9293C12.0339 15.1836 12.9293 14.2882 12.9293 13.1836V8.2947C12.9293 7.19014 12.0339 6.2947 10.9293 6.2947H10.1819ZM2 7.5447H10.9293C11.3435 7.5447 11.6793 7.88049 11.6793 8.2947V13.1836C11.6793 13.5978 11.3435 13.9336 10.9293 13.9336H2C1.58579 13.9336 1.25 13.5978 1.25 13.1836V8.29471C1.25 7.88049 1.58579 7.5447 2 7.5447Z"
        fill="#B0B0B0"
      />
    </svg>
  );
}

export default function PasswordModal() {
  return (
    <div className={styles.modal}>
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
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
        </div>
        <button className={styles.button}>Submit</button>
      </div>
    </div>
  );
}
