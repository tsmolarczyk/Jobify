import { useState, useCallback } from 'react';
import { Hero } from './Hero/Hero';
import { ExploreMarketplace } from './ExploreMarketplace/ExploreMarketplace';
import { JobTraining } from './JobTraining/JobTraining';

import { PostOffer } from './PostOffer/PostOffer';
import { DateComponent } from './DateComponent/DateComponent';

const Main = () => {
  const [number, setNumber] = useState(1);

  const handleStateChange = useCallback(() => {
    setNumber((state) => state + 1);
  }, [setNumber]);

  return (
    <div>
      <Hero setNumber={handleStateChange} />
      <ExploreMarketplace />
      <PostOffer />
      <JobTraining />
      <div>Number: {number}</div>
      <DateComponent date={new Date('October 19, 1932')} />
    </div>
  );
};

export { Main };
