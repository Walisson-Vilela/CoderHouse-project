import './header.module.css';

const Header = () => {
    return (

        <nav className='w-full flex justify-between items-center p-5 bg-white shadow-xl'>
            <span>Nome da Compania</span>
            <ul style={{ display: 'flex' }}>
                <a>Features</a>
                <li>Premium</li>
                <li>Suporte</li>
                <li>
                    <button>
                        Cadastro
                    </button>
                </li>
            </ul >
        </nav >

    );
}

export { Header };