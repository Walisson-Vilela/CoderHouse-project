import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import styles from "./card.module.css";

interface IProducts {
  title: string;
  price: number;
  discount?: number; // Desconto opcional
  image: string;
  rating: {
    count: number;
  };
}

interface ItemProps {
  product: IProducts;
}

const Card: React.FC<ItemProps> = ({ product }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleBuyClick = () => {
    navigate(`/product/${product.title}`, { state: { product } });
  };

  // Cálculo do preço com desconto
  const hasDiscount = product.discount !== undefined && product.discount > 0; // Verifica explicitamente se o desconto é maior que 0
  const discountedPrice = hasDiscount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : null;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        {/* Renderizar o badge apenas se o desconto for maior que 0 */}
        {hasDiscount && (
          <div className={styles.discountBadge}>
            -{product.discount}%{/* Exibe o valor do desconto */}
          </div>
        )}
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

      {/* Renderizar preço com ou sem desconto */}
      {hasDiscount ? (
        <div className={styles.priceContainer}>
          <p className={styles.originalPrice}>
            R$ {product.price.toFixed(2)}
          </p>
          <p className={styles.discountedPrice}>
            R$ {discountedPrice}
          </p>
        </div>
      ) : (
        <p className={styles.cardPrice}>R$ {product.price.toFixed(2)}</p>
      )}

      {product.price > 100 && (
        <p className={styles.cardInstallment}>
          Em até 10x de R$
          {(hasDiscount
            ? discountedPrice / 10
            : product.price / 10
          ).toFixed(2)}{" "}
          sem juros
        </p>
      )}

      <div className={styles.cardActions}>
        <PrimaryButton name="Comprar" onClick={handleBuyClick} />
      </div>
    </div>
  );
};

export default Card;
