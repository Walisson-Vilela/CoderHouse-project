import CartWidget from "./CartWidget";
import BrazilFlagImg from "../../images/brazilFlag.png";
import UKFlagImg from "../../images/ukFlag.png";

interface Iprops {
  name: string;
}

const Header = ({ name }: Iprops) => {
  return (
    <nav className="w-full flex justify-between items-center p-5 bg-transparent shadow-md">
      <div className="w-3/12 flex flex-row items-center">
        <span className="mr-6">Empresa {name}</span>
        <div className="mx-2">
          <img src={BrazilFlagImg} className="w-8 cursor-pointer " alt="Brazil flag Icon" />
        </div>
        <div className="mx-2">
          <img src={UKFlagImg} className="w-8 cursor-pointer" alt="UK Flag Icon" />
        </div>
      </div>
      <ul className="flex flex-row items-center"> 
        <li className="mx-2">Armas</li>
        <li className="mx-2">Poções</li>
        <li className="mx-2">Livros</li>
        <li className="mx-2">Cancelar</li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export { Header };
