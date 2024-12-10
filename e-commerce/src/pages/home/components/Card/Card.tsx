import React, { useState } from "react";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
<<<<<<< HEAD
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating"; // Importando o Rating do MUI
import styles from "./card.module.css";
=======
import styles from './card.module.css';
>>>>>>> parent of 2c2fb8e (Ajustes no layout do componente de detalhe do produto)

// Tipagem para os dados do produto
interface IProducts {
  title: string;
  price: number;
  image: string;
  rating: {
    count: number;
    rate: number; // Incluindo o valor da avaliação
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
<<<<<<< HEAD
      <div className={styles.ratingContainer}>
        <Box sx={{ display: "flex", margin: '0.5rem 0', alignItems: "center" }}>
          <Rating name="read-only" value={product.rating?.rate || 0}precision={0.5} size="small" readOnly />
        </Box>
      </div>
      {hasDiscount ? (
        <div className={styles.priceContainer}>
          <p className={styles.originalPrice}>R$ {product.price.toFixed(2)}</p>
          <p className={styles.discountedPrice}>R$ {discountedPrice}</p>
        </div>
      ) : (
        <p className={styles.cardPrice}>R$ {product.price.toFixed(2)}</p>
      )}

      {product.price > 100 && (
        <p className={styles.cardInstallment}>
          Em até 10x de R$
          {(hasDiscount ? discountedPrice / 10 : product.price / 10).toFixed(
            2
          )}{" "}
          sem juros
=======
      <p className={styles.cardPrice}>R${product.price}</p>
      {product.price > 100 && (
        <p className={styles.cardInstallment}>
          Em até 10x de ${(product.price / 10).toFixed(2)} sem juros
>>>>>>> parent of 2c2fb8e (Ajustes no layout do componente de detalhe do produto)
        </p>
      )}
       
      <div className={styles.cardActions}>
        <PrimaryButton name="Comprar" />
      
      </div>
    </div>
  );
};

export default Card;
