import React, { useState } from "react";
import ActiveLastBreadcrumb from "../BreadcrumbPages/ActiveLastBreadcrumb";
import styles from "./sortProductMenu.module.css";

const SortProductMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Controla a visibilidade do menu

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string): void => {
    console.log("Opção selecionada:", option); // Aqui você pode manipular o estado ou chamar uma função
    setIsOpen(false); // Fecha o menu após a seleção
  };

  const options: string[] = [
    "Popularidade",
    "Lançamentos",
    "Maior para o menor",
    "Menor para o maior",
    "Mais avaliados",
  ];

  return (
    <div className={styles.container}>
      <ActiveLastBreadcrumb />
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdown}>
          <div
            className={styles.dropdownHeader}
            onClick={toggleMenu}
            tabIndex={0}
            role="button"
          >
            <span>Ordenar</span>
            <span>▼</span>
          </div>

          {isOpen && (
            <ul className={styles.dropdownMenu}>
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={styles.dropdownOption}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortProductMenu;
