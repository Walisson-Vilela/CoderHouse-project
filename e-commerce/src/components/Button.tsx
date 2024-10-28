import React from 'react'

interface Iprops {
    name: string;
}

const Button: React.FC<Iprops> = ({name}) => {
  return (
    <button>{name}</button>
  )
}

export default Button