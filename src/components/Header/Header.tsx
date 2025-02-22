import { FC } from "react";
import Logo from "../../assets/logo/Logo";
import styles from "./Header.module.scss";

type TypeLink = { name: string; ref: string };

const data: TypeLink[] = [
  { name: "About us", ref: "/about" },
  { name: "Services", ref: "/services" },
  { name: "Use Cases", ref: "/case" },
  { name: "Pricing", ref: "/price" },
  { name: "Blog", ref: "/blog" },
];

const Header: FC = () => {
  //todo add assets company icon
  //todo add <Link> form react-nav
  return (
    <div className={styles.header}>
      <a href="#">
        <Logo width="200" height="36" />
      </a>
      <nav className={styles.nav}>
        <ul>
          {data.map((link, i) => (
            <li key={i}>
              <a href="#">{link.name}</a>
            </li>
          ))}
        </ul>
        <a href="#" className={styles.request}>
          Requst a qoute
        </a>
      </nav>
    </div>
  );
};

export default Header;
