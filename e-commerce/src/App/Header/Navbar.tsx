import CartWidget from "./CartWidget";
import BrazilFlagImg from "../../images/brazilFlag.png";
import UKFlagImg from "../../images/ukFlag.png";

interface Iprops {
  name: string;
}

const Header = ({ name }: Iprops) => {
  return (
    <nav class="col-span-3">
      <div className="max-h-20 border-4 border-white rounded-md w-full flex justify-between items-center p-5 bg-gradient-to-t from-blue-950/60 to-blue-400/40 shadow-md">
        <div className="min-w-4/12 flex flex-row items-center">
          <span className="mr-6">Empresa {name}</span>
          <div className="mx-2">
            <img
              src={BrazilFlagImg}
              className="w-8 cursor-pointer "
              alt="Brazil flag Icon"
            />
          </div>
          <div className="mx-2">
            <img
              src={UKFlagImg}
              className="w-8 cursor-pointer"
              alt="UK Flag Icon"
            />
          </div>
        </div>
        <ul className="flex flex-row items-center">
          <li className="mx-4 hover:text-blue-500 cursor-pointer">Armas</li>
          <li className="mx-4 hover:text-blue-500 cursor-pointer">Poções</li>
          <li className="mx-4 hover:text-blue-500 cursor-pointer">Livros</li>
          <li className="mx-4 hover:text-blue-500 cursor-pointer">Cancelar</li>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};

export { Header };
