import React, { useState } from 'react'
import ItemListContainer from './ItemListContainer'
import ItemCount from './ItemCount'

import Bob from '../../assets/bob_esponja.jpg';


const Section = () => {
const[name,setName] = useState<string>("Walisson")

  return (
    <div className='p-4'>
        <ItemListContainer />
        <ItemCount />
    </div>
  )
}

export default Section