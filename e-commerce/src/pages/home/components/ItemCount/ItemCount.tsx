import { useEffect, useState } from "react";
import Button from "../../../../components/PrimaryButton/PrimaryButton";
import styles from './itemCount.module.css';
import SecondaryButton from "../../../../components/SecondaryButton/SecondaryButton";

const ItemCount = () => {
  const [count, setCount] = useState<number>(1);
  const [value, setValue] = useState<number>(0);
  const [stock, setStock] = useState<number>(5);

  const product = 50;

  const handleClick = (operation: string) => {
    if (operation === "add") {
      setCount((prevCount) => prevCount + 1);
    } else if (operation === "subtract") {
      setCount((prevCount) => Math.max(prevCount - 1, 0));
    }
  };

  useEffect(() => {
    setValue(product * count);
  }, [count]);

  return (
    <section className={styles.section}>
      {/* <span className={styles.stock}>Estoque: {stock}</span> */}
      <div className={styles.itemCountContainer}>
        <div className={styles.controls}>
          <Button
            disabled={false}
            onClick={() => handleClick("subtract")}
            name="-"
          />
          <span className={styles.countDisplay}>{count}</span>
          <Button
            disabled={count >= stock}
            onClick={() => handleClick("add")}
            name="+"
          />
        </div>
        <SecondaryButton
          disabled={false}
          onClick={() => handleClick("add")}
          name="Adicionar ao carrinho"
        />
      </div>
    </section>
  );
};

export default ItemCount;
