import React, { useEffect } from "react";
import { deleteData, get, post, put } from "../../../services/api.services";
import { Loading } from "../../../components/Loading";

const Card = () => {
  useEffect(() => {
    const onMount = async () => {
      // const result = await get("pokemon/ditto");
      // const result = await post("http://localhost:3000/posts", { "title": "Walisson", "views": 500});
      // const result = await put("http://localhost:3000/posts/339d", { "title": "Vilela", "views": 500});
      // const result = await deleteData("http://localhost:3000/posts/");

      // const data = {
      //   nome: "Walisson",
      //   password: "12345",
      //   email: "walisson.vilela@hotmail.com",
      // };

      // const result = await put("/character", data);

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
