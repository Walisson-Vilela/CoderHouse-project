import { useState } from "react";
// import { format } from "date-fns";

const ClickCount = () => {
  const [count, setCount] = useState<number>(0);
  const [date, setDate] = useState<Date | null>(null);

const handleClick = () => {
    setCount((value) => value + 1);
    setDate(new Date())
}
  return (
    <div>
      <p>
        Quantidades clicadas = {count}, no dia {date?.toLocaleString()} 
      </p>
      <button onClick={handleClick}>Clique aqui</button>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default ClickCount;
