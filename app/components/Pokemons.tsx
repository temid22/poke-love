'use client';

import styles from '../../styles/page.module.css';

import { useEffect, useState } from 'react';
import Poke from './Poke';

interface Pokemon {
  name: string;
  id: number;
  sprites: object;
  weight: number;
  height: number;
  // abilities: array;
}

const Pokemons = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [pokeData, setPokeData] = useState([]);

  let x = [];

  useEffect(() => {
    // fetch 100 pokemons
    const APICall = async () => {
      // const res = await fetch(`https://pokeapi.co/api/v2/pokemon?1imit-2008offset-0`);
      await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          data.results.map((p: any) => {
            // fetch details of 100 pokemons
            fetch(`https://pokeapi.co/api/v2/pokemon/${p.name}`, {
              method: 'GET',
              headers: {
                'Content-type': 'application/json',
              },
            })
              .then((res) => res.json())
              .then((data) => {
                // push the data in to an array
                x.push(data);
                setPokeData(data);
              })
              .catch((err) => console.log(err));
          });
        });
      // set pokemon data
      setPokemon(x);
    };
    // fire this function when the lenght of the the array is less than 1
    pokemon.length === 0 && APICall();
  }, [pokemon.length > 1]);

  return (
    <div>
      <div className={styles.pokemonContainer}>
        <div className={styles.pokemonTitle}>Pokemons!</div>
        {/* map through each pokemon */}
        <div className={styles.pokemonWrapper}>
          {pokemon?.map((poke: Pokemon) => (
            <Poke
              name={poke.name}
              id={poke.id}
              sprites={poke.sprites}
              weight={poke.weight}
              height={poke.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
