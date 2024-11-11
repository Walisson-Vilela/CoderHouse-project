import CartWidget from "./CartWidget";
import SearchInput from "./SearchInput";

interface Iprops {
  name: string;
}

const Header = ({ name }: Iprops) => {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-white">
      <span>Empresa de {name}</span>
      <div className="flex flex-row items-center w-6/12 justify-end"> 
        <SearchInput />
        <CartWidget />
      </div>
    </nav>
  );
};

export { Header };
