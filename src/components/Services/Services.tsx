import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./Services.module.scss";
import { data as cardData } from "./fakeApiData";

const Services = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <ul>
        {cardData.map((card, i) => (
          <a href="#" key={i}>
            <ServiceCard
              firstRow={card.firstRow}
              secondRow={card.secondRow}
              icon={card.icon}
            />
          </a>
        ))}
      </ul>
    </section>
  );
};

export default Services;
