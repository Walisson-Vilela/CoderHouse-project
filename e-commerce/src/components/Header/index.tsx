import React from 'react';
import './styles.css';

const Header = () => {


    return (

        <nav className='navBar'>
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