const Header = () => {
  return (
    <nav className="w-full flex justify-between items-center p-5 bg-white shadow-md">
      <span>Nome da Compania</span>
      <ul style={{ display: "flex" }}>
        <a>Features</a>
        <li>Premium</li>
        <li>Suporte</li>
        <li>
          <button className="rounded-none bg-primaryColor rounded-md outline outline-cyan-500 text-white px-6 py-3">
            Cadastro
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { Header };
