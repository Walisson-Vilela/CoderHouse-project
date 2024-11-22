import React, { useState } from "react";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import styles from './card.module.css';

// Tipagem para os dados do produto
interface IProducts {
  title: string;
  price: number;
  image: string;
  rating: {
    count: number;
  };
}

interface ItemProps {
  product: IProducts; // Produto a ser exibido
}

const Card = ({ product }: ItemProps) => {
  const [loading, setLoading] = useState<boolean>(true); // Estado inicial para carregamento da imagem

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <div className={styles.cardImageWrapper}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.cardImage}
            onLoad={handleImageLoad}
            style={{ display: loading ? "none" : "block" }}
          />
        </div>
      </div>
      <p className={styles.cardTitle}>{product.title}</p>
      <p className={styles.cardPrice}>R${product.price}</p>
      {product.price > 100 && (
        <p className={styles.cardInstallment}>
          Em até 10x de ${(product.price / 10).toFixed(2)} sem juros
        </p>
      )}
       
      <div className={styles.cardActions}>
        <PrimaryButton name="Comprar" />
      
      </div>
    </div>
  );
};

export default Card;
