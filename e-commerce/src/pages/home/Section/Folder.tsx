import React from "react";
import ImageFolder from "../../../../public/images/folderImage.png";

const Folder = () => {
  return (
<div className="w-9/12 flex justify-between bg-tertiaryColor h-96">
  <h1 className="text-3xl font-bold p-4 w-5/12 text-left flex mt-20 ml-12 justify-between text-primaryColor">
    Compre com 10% de desconto em sua Camiseta Casual Slim Fit masculina
  </h1>
  <div className="w-6/12 flex items-center justify-center border transform scale-x-[-1]">
    <img src={ImageFolder} className="w-full h-96 object-contain" alt="Imagem do produto" />
  </div>
</div>

  );
};

export default Folder;
