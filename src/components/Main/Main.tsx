import { useEffect } from 'react';
import { Hero } from './Hero';
import { ExploreMarketplace } from './ExploreMarketplace/ExploreMarketplace';
import { JobTraining } from './JobTraining';

import { NewJobForm } from './NewJobForm/NewJobForm';
import { PostOffer } from './PostOffer/PostOffer';

const Main = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Hero />
      <ExploreMarketplace />
      <PostOffer />

      <JobTraining />
    </div>
  );
};

export { Main };
