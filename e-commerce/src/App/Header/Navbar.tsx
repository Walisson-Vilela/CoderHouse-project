import CartWidget from "./CartWidget";

interface Iprops {
  name: string;
}

const Header = ({ name }: Iprops) => {
  return (
    <nav className="w-full flex justify-between items-center p-5 bg-white shadow-md">
      <span>Empresa de {name}</span>
      <ul className="flex flex-row items-center"> 
        <CartWidget />
      </ul>
    </nav>
  );
};

export { Header };
