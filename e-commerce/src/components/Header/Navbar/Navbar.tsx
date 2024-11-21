import CartWidget from "../CartWidget";
import SearchInput from "../SearchInput/SearchInput";
import styles from './navbar.module.css';

interface Iprops {
  name: string;
}

const Header = ({ name }: Iprops) => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.companyName}>Empresa de {name}</span>
      <div className={styles.searchCartContainer}>
        <SearchInput />
        <CartWidget />
      </div>
    </nav>
  );
};

export { Header };
