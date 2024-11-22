import CartWidget from "./CartWidget";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./navbar.module.css";

interface Iprops {
  name: string;
}

const Header = ({ name }: Iprops) => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.companyName}>
        <img className={styles.logo} src="../../../../public/images/logo.jpg" />
      </span>
      <span className={styles.searchCartContainer}>
        <SearchInput />
      </span>
      <span className={styles.menu}>
        <button className={styles.support}>Suporte</button>
        <button className={styles.login}>Walisson</button>
        <img
          className={styles.person}
          src="../../../../public/images/person.svg"
        />
        <CartWidget />
      </span>
    </nav>
  );
};

export { Header };
