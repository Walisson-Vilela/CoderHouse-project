import React, { useEffect } from "react";
import { get, post } from "../services/api.services";
import { Loading } from "./Loading";

const Card = () => {
  useEffect(() => {
    const onMount = async () => {
      const result = await get("pokemon/pikachu");
      // const data = { 
      //   nome: 'Walisson',
      //   password: '12345',
      //   email: 'walisson.vilela@hotmail.com'
      // }
      // const result = await post("/character", data);
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
