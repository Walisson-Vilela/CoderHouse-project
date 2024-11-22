import { Header } from "../../components/Header/Navbar/Navbar";
import SortProductMenu from "../../components/Header/SortProductMenu/SortProductMenu";
import Aside from "./Aside/Aside";
import Section from "./section/Section";
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.display}>
      <Header name={"Walisson"} />
      <SortProductMenu />
      <div className={styles.content}>
        <Aside />
        <Section />
      </div>
    </div>
  );
}

export default Home;
