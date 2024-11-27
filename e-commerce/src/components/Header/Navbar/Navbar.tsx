import React, { useState } from "react";
import CartWidget from "./CartWidget";
import SearchInput from "../SearchInput/SearchInput";
import { Drawer } from "@mui/material";
import SecondaryButton from "../../SecondaryButton/SecondaryButton";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import styles from "./navbar.module.css";

interface Iprops {
  name: string;
}

const Navbar = ({ name }: Iprops) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0); // Controla a etapa (0: Login, 1: Cadastro, 2: Endereço, 3: Segurança)

  // Alterna o estado do Drawer
  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
    setStep(0); // Reseta para a tela inicial ao fechar
  };

  // Gerencia as etapas
  const goToNextStep = () => setStep((prev) => prev + 1);
  const goToPreviousStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

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
          onClick={toggleDrawer}
          className={styles.person}
          src="../../../../public/images/person.svg"
        />
        <CartWidget />
      </span>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer}
      >
        <div style={{ width: 380, padding: "10%", gap: "2rem" }}>
          {step === 0 && (
            <>
              <h2 className={styles.title}>Login</h2>
              <form className={styles.form}>
                <input placeholder="E-mail" type="email" />
                <input placeholder="Senha" type="password" />
                <SecondaryButton name="Entrar" onClick={() => {}} disabled={false} />
                <div style={{ marginTop: "10px", textAlign: "center" }}>
                  <a href="#">Esqueci minha senha</a>
                </div>
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <p>Ainda não é cliente?</p>
                  <PrimaryButton name="Cadastrar" onClick={goToNextStep} disabled={false} />
                </div>
              </form>
            </>
          )}

          {step === 1 && (
            <>
              <h2 className={styles.title}>Cadastro</h2>
              <form className={styles.form}>
                <input placeholder="Nome" type="text" />
                <input placeholder="Sobrenome" type="text" />
                <input placeholder="Data de Nascimento" type="date" />
                <input placeholder="CPF" type="text" />
                <input placeholder="E-mail" type="email" />
                <input placeholder="Telefone Fixo" type="text" />
                <input placeholder="Telefone" type="text" />
                <div className={styles.buttonGroup}>
                  <PrimaryButton name="Voltar" onClick={goToPreviousStep} disabled={false} />
                  <SecondaryButton name="Próximo" onClick={goToNextStep} disabled={false} />
                </div>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className={styles.title}>Endereço</h2>
              <form className={styles.form}>
                <input placeholder="Identificação (ex: Escritório, Casa, etc.)" type="text" />
                <input placeholder="CEP" type="text" />
                <input placeholder="Endereço" type="text" />
                <input placeholder="Número" type="text" />
                <input placeholder="Bairro" type="text" />
                <input placeholder="Cidade" type="text" />
                <div className={styles.buttonGroup}>
                  <PrimaryButton name="Voltar" onClick={goToPreviousStep} disabled={false} />
                  <SecondaryButton name="Próximo" onClick={goToNextStep} disabled={false} />
                </div>
              </form>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className={styles.title}>Dados de Segurança</h2>
              <form className={styles.form}>
                <input placeholder="Senha" type="password" />
                <input placeholder="Repita a Senha" type="password" />
                <div className={styles.checkboxGroup}>
                  <input type="checkbox" id="news" style={{width: '1rem',  accentColor: 'rgb(254, 147, 39)'}}  />
                  <label htmlFor="news">Receber Novidades por e-mail</label>
                </div>
                <div className={styles.checkboxGroup}>
                  <input type="checkbox" id="policy" style={{width: '1rem',  accentColor: 'rgb(254, 147, 39)'}} />
                  <label htmlFor="policy">Aceito a política de privacidade</label>
                </div>
                <div className={styles.buttonGroup}>
                  <PrimaryButton name="Voltar" onClick={goToPreviousStep} disabled={false} />
                  <SecondaryButton name="Cadastrar" onClick={() => alert("Cadastro concluído!")} disabled={false} />
                </div>
              </form>
            </>
          )}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
