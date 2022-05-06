import { useEffect } from 'react';
import { Hero } from './Hero';
import { ExploreMarketplace } from './ExploreMarketplace/ExploreMarketplace';
import { JobTraining } from './JobTraining';

import { NewJobForm } from './NewJobForm/NewJobForm';

const Main = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Hero />
      <ExploreMarketplace />
      <NewJobForm />
      <JobTraining />
    </div>
  );
};

export { Main };
