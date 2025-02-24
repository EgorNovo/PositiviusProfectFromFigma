import { FC } from "react";
import styles from "./ServiceCard.module.scss";

export type TypeCardProps = {
  firstRow: string;
  secondRow: string;
  icon: string;
};

const ServiceCard: FC<TypeCardProps> = ({ firstRow, secondRow, icon }) => {
  return (
    <div className={styles.card}>
      <h3>
        <span className={styles.row}>{firstRow}</span>
        <span className={styles.row}>{secondRow}</span>
        <img src="/public/image/Link.png" />
      </h3>
      <img src={icon} alt={firstRow} />
    </div>
  );
};

export default ServiceCard;
