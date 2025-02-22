import { FC } from "react";
import styles from "./Cover.module.scss";

const Cover: FC = () => {
  return (
    <section className={styles.cover}>
      <img
        className={styles.image}
        alt="cover image"
        src="/public/image/Illustration.png"
      />
			<div className={styles.content}>
				<h1>Navigating the digital landscape for success</h1>
				<p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
				<button>Book a consultation</button>
			</div>
    </section>
  );
};

export default Cover;
