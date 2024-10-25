import CartWidget from "./CartWidget";
import BrazilFlagImg from "../../images/brazilFlag.png";
import UKFlagImg from "../../images/ukFlag.png";

interface Iprops {
  name: string;
}

const Header = ({ name }: Iprops) => {
  return (
    <nav className="w-full flex justify-between items-center p-5 bg-white shadow-md">
      <div className="w-3/12 flex flex-row items-center">
        <span className="mr-6">EMPRESA DE {name}</span>
        <div className="mx-2">
          <img src={BrazilFlagImg} className="w-8 cursor-pointer " alt="Brazil flag Icon" />
        </div>
        <div className="mx-2">
          <img src={UKFlagImg} className="w-8 cursor-pointer" alt="UK Flag Icon" />
        </div>
      </div>
      <ul className="flex flex-row items-center"> 
        <li className="mx-2">ARMAS</li>
        <li className="mx-2">POÇÕES</li>
        <li className="mx-2">LIVROS</li>
        <li className="mx-2">CANCELAR</li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export { Header };
