import './styles.css';

const Header = () => {


    return (

        <nav className='w-full flex justify-between items-center p-5 bg-white shadow-xl'>
            <span>Nome da Compania</span>
            <ul style={{ display: 'flex' }}>
                <li>Features</li>
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