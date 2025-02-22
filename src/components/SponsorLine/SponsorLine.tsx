import { FC } from "react";
import styles from "./SponserLine.module.scss";

const path = [
  "/public/image/Company logo.png",
  "/public/image/Company logo-1.png",
  "/public/image/Company logo-2.png",
  "/public/image/Company logo-3.png",
  "/public/image/Company logo-4.png",
  "/public/image/Company logo-5.png",
];

const SponsorLine: FC = () => {
  return (
    <div className={styles.line}>
      {path.map((logo, i) => (
        <img key={i} src={logo} />
      ))}
    </div>
  );
};

export default SponsorLine;
