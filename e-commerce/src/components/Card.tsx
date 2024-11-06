import React, { useEffect } from "react";
import { get } from "../services/api.services";
import { Loading } from "./Loading";

const Card = () => {
  useEffect(() => {
    const onMount = async () => {
      const result = await get("/character/?page=2");
      console.log(result);
    };
    onMount();
  }, []);

  return (
    <div>
      <Loading />
    </div>
  );
};

export default Card;
