import React from 'react'

const PokemonList = ({pokemon}) => {
  return (
    <div>
        {
        pokemon.map((p)=><div key={p.name}> {p.name}</div>)
        }

    </div>
  )
}

export default PokemonList