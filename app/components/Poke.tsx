import React from 'react';

import styles from '../../styles/page.module.css';

// interface Abilities {
//     name:string
// }

interface Props {
  name: string;
  id: number;
  back_default: string;
  weight: number;
  height: number;
}

const Poke: React.FC<Props> = ({ name, id, sprites, weight, height }) => {
  return (
    <div key={id}>
      <div className={styles.pokeCard}>
        <div className={styles.pokeImg}>
          <img src={sprites?.back_default} alt='Pokemon' />
        </div>
        <div className={styles.pokeTitle}>{name}</div>

        {/* { abilitiy. <div className={styles.pokeDesc}> {ability}</div>} */}
        <div className={styles.pokeWeight}>Weight:{weight}</div>
        <div className={styles.pokeHeight}>Height: {height}</div>
        <button className={styles.favBtn}>Add To Favorite</button>
      </div>
    </div>
  );
};

export default Poke;
