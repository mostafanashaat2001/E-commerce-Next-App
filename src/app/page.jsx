import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import hero from "/public/image/hero.svg";

export default function Home() {
  return (
    <>
      <div className={`container pt-5 ${styles.hero}`}>
        <div className="row pt-4">
          <div className={`col-lg-6 ${styles.col}`}>
            <h1 className={styles.tittle}>
              your best online shop destination !
            </h1>
            <p className={styles.desc}>
              Discover a world od endless shopping possibilities at our online
              store. browse, choose, and order your favorite products from the
              comfort of your home
            </p>
            <Link href="/products" className={`btn ${styles.button}`}>
              shop now
            </Link>
          </div>
          <div className={`col-lg-6 ${styles.image}`}>
            <div className={styles.img}>
              <Image
                src={hero}
                // width={500}
                fill={true}
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
