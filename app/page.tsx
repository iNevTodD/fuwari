import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
export default function Welcome() {
  return (
    <main className={styles.page}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <Image
            className={styles.logoImg}
            src="/logo.png"
            alt="Fuwari logo"
            width={35}
            height={35}
            quality={100}
          />
        </div>
        <span className={styles.name}>fuwari</span>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroCard}>
          <Image
            className={styles.heroImg}
            src="/welcome-hero.svg"
            width={350}
            height={330}
            alt="Coins growing"
          />
        </div>
        <h1 className={styles.title}>Every shift brings you closer</h1>
        <p className={styles.text}>
          Log your shifts, choose what you work for and watch your goals fill
          up.
        </p>
      </div>

      <div className={styles.actions}>
        <Button href="/signup">Create account</Button>
        <Button href="/login" variant="secondary">
          I already have an account
        </Button>
      </div>
    </main>
  );
}
