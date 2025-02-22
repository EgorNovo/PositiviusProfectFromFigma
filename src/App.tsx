import { FC } from "react";
import Header from "./components/Header/Header";

import styles from "./app.module.scss";
import Landing from "./pages/landing/landing";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Landing />
    </div>
  );
};

export default App;
