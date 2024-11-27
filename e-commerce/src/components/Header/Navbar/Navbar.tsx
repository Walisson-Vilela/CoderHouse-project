import React, { useState } from "react";
import CartWidget from "./CartWidget";
import SearchInput from "../SearchInput/SearchInput";
import { Drawer, Button, TextField, Link } from "@mui/material";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import SecondaryButton from "../../SecondaryButton/SecondaryButton";
import styles from "./navbar.module.css";

interface Iprops {
  name: string;
}

const Navbar = ({ name }: Iprops) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  // Função para alternar o estado do Drawer
  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev); // Alterna entre true e false
  };

  return (
    <nav className={styles.navbar}>
      <span className={styles.companyName}>
        <img className={styles.logo} src="../../../../public/images/logo.jpg" />
      </span>
      <span className={styles.searchContainer}>
        <SearchInput />
      </span>
      <span className={styles.menu}>
        <span className={styles.login}>Login</span>
        <img
          onClick={toggleDrawer} // Chama a função para alternar o estado
          className={styles.person}
          src="../../../../public/images/person.svg"
        />
        <CartWidget />
      </span>

      {/* O Drawer será exibido quando openDrawer for true */}
      <Drawer
        anchor="right" // Exibe o Drawer à direita
        open={openDrawer} // Controla a abertura e fechamento
        onClose={toggleDrawer} // Fecha o Drawer ao clicar fora dele
      >
        <div style={{ width: 380, padding: "10%", gap: "2rem" }}>
          {/* Formulário de login */}
          <h2 className={styles.title}>Login</h2>
          <form className={styles.form}>
            <input placeholder="E-mail" type="email" />
            <input placeholder="Senha" type="password" />
            <SecondaryButton name={"Entrar"} />
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <a href="#" >
                Esqueci minha senha
              </a>
            </div>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{marginBottom: '1rem'}}>Ainda não é cliente?</p>
              <PrimaryButton name={"Cadastrar"} />
            </div>
          </form>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
