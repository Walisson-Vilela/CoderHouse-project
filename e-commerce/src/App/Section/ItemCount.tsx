import { useEffect, useState } from "react";
import Button from "../../components/Button";

const ItemCount = () => {
  const [count, setCount] = useState<number>(1);
  const [value, setValue] = useState<number>(0);
  const [stock, setStock] = useState<number>(5);

  const product = 50;

  const handleClick = (operation: string) => {
    if (operation === "add") {
      setCount((prevCount) => prevCount + 1); 
    } else if (operation === "subtract") {
      setCount((prevCount) => Math.max(prevCount - 1, 0)); // Decrementa o count, sem permitir valores negativos
    }
  };

  useEffect(() => {
    setValue(product * count); // Atualiza o value multiplicando o valor base pelo count
  }, [count]);

  return (
    <section >
      <span>Estoque: {stock}</span>
      <div className="w-3/12 col-span-2 min-h-4 border-4 h-36 flex flex-col justify-between items-left p-5 shadow-md">
      <div className="flex flex-col justify-between">
        <div className="flex flex-row mb-4 w-full justify-between items-center">
          <Button
            disabled={false}
            onClick={() => handleClick("subtract")}
            name="-"
          />
          <span className="mx-4 w-full text-center">{count}</span>
          <Button
            disabled={count >= stock}
            onClick={() => handleClick("add")}
            name="+"
          />
        </div>

        <Button
          disabled={false}
          onClick={() => handleClick("add")}
          name="Adicionar ao carrinho"
        />
      </div>
      </div>
    </section>
  );
};

export default ItemCount;
