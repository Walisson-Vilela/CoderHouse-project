import React from "react";
import SecondaryButton from "../../../components/SecondaryButton";

const Folder = () => {
  return (
    <div className="w-full flex justify-between bg-gradient-to-r from-tertiaryColor h-96 px-40">
      <div>
        <h1 className="text-3xl font-bold p-4 w-7/12 mb-10 text-left flex mt-20 ml-20 justify-between text-primaryColor">
          Compre com 10% de desconto em sua Camiseta Casual Slim Fit masculina
        </h1>
        <div className="ml-24">
          <SecondaryButton name={"Compre agora"} />
        </div>
      </div>
      <div
        className="w-5/12 flex items-center justify-center transform scale-x-[-1]"
        style={{
          backgroundImage: `url(/images/folderImage.png)`, // Caminho correto
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingLeft: '10rem',
        }}
      >
        {/* Conteúdo opcional dentro da div */}
      </div>
    </div>
  );
};

export default Folder;
