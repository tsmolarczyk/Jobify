import css from './Hero.module.css';
import { SearchBar } from './SearchBar';
import { memo } from 'react';
import { FunctionTypeNode } from 'typescript';

/*
 memo
 
 Jezeli pierwszy render
    - zapamietaj komponent
  Jezeli kolejny render
     Jezeli propsy w aktualnym renderze !== props w poprzednim renderze
         - przerenderuj
      W przeciwnym wypadku
         - zwroc zmemoizowany komponent
*/

type Props = {
  setNumber: () => void;
};

const Hero = memo(({ setNumber }: Props) => {
  console.log('Hero');
  return (
    <section className={css.container}>
      <h1 className={css.title}>
        Znajdź swoją <br />
        wymarzoną pracę
      </h1>
      <p className={css.para}>
        Szukanie pracy nie powinno być pracą na etacie. <br />
        Powiedz nam czego szukasz, a znajdziemy to dla Ciebie.
      </p>
      <SearchBar />
      <img
        className={css.image}
        src='./assets/images/hero-img.png'
        alt='hero-img-main'
      ></img>
    </section>
  );
});

export { Hero };
