import React, { useState } from 'react'
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount'
import Card from './Card'
import Bob from '../../assets/bob_esponja.jpg';


const Section = () => {
const[name,setName] = useState<string>("Walisson")

  return (
    <div className='p-4'>
        <ItemListContainer />
        <Card image={Bob} />
        <ItemCount />
    </div>
  )
}

export default Section