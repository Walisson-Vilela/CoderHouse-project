interface Iprops {
    name: string;
}

const Header = ({name}: Iprops) => {
  return (
    <nav className="w-full flex justify-between items-center p-5 bg-white shadow-md">
      <span>Empresa de {name}</span>
      <ul className="flex flex-row items-center">
        <li className="mx-2">Features</li>
        <li className="mx-2">Premium</li>
        <li className="mx-2">Suporte</li>
        <li >
          <button className=" bg-primaryColor rounded-md outline outline-cyan-500 text-white px-3 py-1">
            Cadastro
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { Header };
