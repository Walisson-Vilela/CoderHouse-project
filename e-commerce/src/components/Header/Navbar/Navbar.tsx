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
      <span className={styles.searchContainer}>
        <SearchInput />
      </span>
      <span className={styles.menu}>
        <span className={styles.login}>Walisson</span>
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
