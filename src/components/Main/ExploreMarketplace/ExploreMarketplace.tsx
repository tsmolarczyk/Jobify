import css from './ExploreMarketplace.module.css';
import { JobOffer } from './JobOffer';
import { BlueBtn } from '../../BlueBtn';

const ExploreMarketplace = () => {
  return (
    <div>
      <div className={css.container}>
        <h2>Explore The Marketplace</h2>
        <p>
          Finding a job shouldn’t be a full-time job. Tell us what you’re
          looking for and we’ll get to work for you.
        </p>
        <div className={css.offers}>
          <JobOffer
            source='./assets/images/microsoft-logo.png'
            company='Microsoft'
            title='Junior Marketing & Communication ManagerJUnior Marketing & Communication Manager'
            date='5 days ago'
          />
          <JobOffer
            source='./assets/images/paypal-logo.png'
            company='Paypal'
            title='Bank Management'
            date='2 days ago'
          />

          <JobOffer
            source='./assets/images/nike-logo.png'
            company='Nike'
            date='week ago'
            title='Senior Visual Designer'
          />
        </div>
        <BlueBtn text='Explore All' />
      </div>
    </div>
  );
};
export { ExploreMarketplace };
