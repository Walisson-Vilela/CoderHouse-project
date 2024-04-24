import React from 'react';


const Hero = () => {

    const title = ['Nome', 'adadasf', 'adadasf']
    return (

        <>
            {title.map(item => (
                <React.Fragment key={item}>
                    <h1>{item}</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adpsicing elit. Ex molestiae voluptate return</p>
                    </div>
                </React.Fragment>
            ))}
                    <div>
                        <button >Voltar</button>
                        <button >Cadastrar</button>
                    </div>

        </>
    )
}

export { Hero }