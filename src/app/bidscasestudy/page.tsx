import styles from "./bidscasestudy.module.css";
import Image from "next/image";

export default function Page() {
    return(
        <div className={styles.mockup}>
            <Image 
                src="/images/bidsmockup.png"
                // layout="responsive"
                width={945}
                height={640}
                alt='Mockup of a tv information display'
            />
        </div>
    );
}