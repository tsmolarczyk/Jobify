import { useEffect, useState, useCallback, useMemo } from 'react';
import { Hero } from './Hero';
import { ExploreMarketplace } from './ExploreMarketplace/ExploreMarketplace';
import { JobTraining } from './JobTraining';

import { LoginForm } from './LoginForm/LoginForm';
import { PostOffer } from './PostOffer/PostOffer';

// 0x03234d

/*
  Jezeli dep array jest puste
     - zwroc zapamietana wartosc (i zapamietaj jezeli nie zostala zapamietana)
  Jezeli dep array ma zaleznosc
    Jezeli zaleznosc sie zmienila pomiedzy renderowaniami
       - oblicz jeszcze wartosc/zadeklaruj funkcje (useCallback)
       - zapamietaj ta wartosc
       - i ja zwroc
  Jezeli nie ma dep array
    - za kazdym razem przeliczaj 
*/

const Main = () => {
  const [number, setNumber] = useState(1);
  console.log('Main');

  // 0x03234d
  // 0x43231e
  // poprzedniprops.handleStateChange === props.handleStateChange
  const handleStateChange = useCallback(() => {
    setNumber((state) => state + 1);
  }, [setNumber]);

  // memo, useCallback, useMemo
  // useState, useEffect
  // const foo = useMemo(() => offers.filter().sort().map(), [offers])

  return (
    <div>
      <Hero setNumber={handleStateChange} />
      <ExploreMarketplace />
      <PostOffer />
      <JobTraining />
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Add 1 {number}
      </button>
      ;
    </div>
  );
};

export { Main };
