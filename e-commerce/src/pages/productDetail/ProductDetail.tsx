import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Navbar/Navbar";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating"; // Importando o Rating do MUI

import styles from "./productDetail.module.css";
import ActiveLastBreadcrumb from "../../components/Header/BreadcrumbPages/ActiveLastBreadcrumb";
import ItemCount from "../home/components/ItemCount/ItemCount";

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Produto não encontrado!</div>;
  }

  // Verificar se o produto tem desconto
  const discount = product.discount || 0; // Se não houver, considera 0%
  const discountedPrice = (product.price * (1 - discount / 100)).toFixed(2);

  // Determinar a mensagem de disponibilidade
  const availabilityMessage =
    product.stock > 0 ? "Em estoque" : "Indisponível no momento";

  return (
    <div>
      <Header name="Walisson" />
      <div className={styles.detailContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
        <div className={styles.productDetails}>
          <ActiveLastBreadcrumb />
          <h2 className={styles.productTitle}>{product.title}</h2>

          {/* Mostrar apenas se vendidos > 0 */}
          {product.soldLast24Hours > 0 && (
            <p className={styles.productSales}>
              {product.soldLast24Hours} vendidos
            </p>
          )}

          {/* Exibir disponibilidade */}
          {product.stock === 0 ? (
            <p className={styles.productPrice}>{availabilityMessage}</p>
          ) : (
            <p className={styles.productPrice}>
              Disponibilidade: {product.stock} Unidades {availabilityMessage}
            </p>
          )}

          {/* Rating - Estrela */}
          <Box
            sx={{
              display: "flex",
              alignItems: "left",
              flexDirection: "column",
              gap: "0.4rem",
            }}
          >
            <Rating
              name="read-only"
              value={product.rating?.rate || 0} 
              precision={0.5} 
              readOnly
            />
            <span>{product.rating.count} avaliações</span>
          </Box>

          {/* Preço com ou sem desconto */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
            {discount > 0 && (
              <p
                className={styles.originalPrice}
                style={{
                  textDecoration: "line-through",
                  color: "#999", // Cinza claro
                  fontSize: "1rem",
                }}
              >
                R$ {product.price.toFixed(2)}
              </p>
            )}
            <p
              className={styles.discountedPrice}
              style={{
                color: "orange", // Sempre laranja
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              R$ {discount > 0 ? discountedPrice : product.price.toFixed(2)}
            </p>
          </div>

          <p className={styles.productInstallment}>
            Em até 10x de R$
            {((discount > 0 ? discountedPrice : product.price) / 10).toFixed(
              2
            )}{" "}
            sem juros
          </p>

          <ItemCount />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
