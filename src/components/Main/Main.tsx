import css from './Main.module.css';
import { Hero } from './Hero';
import { ExploreMarketplace } from './ExploreMarketplace/ExploreMarketplace';
import { JobTraining } from './JobTraining';
import { Input } from '../Input/Input';
import { useState, ChangeEvent } from 'react';

const Main = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    console.log(email, password);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <Hero />
      <ExploreMarketplace />
      <div className={css.form}>
        <h2 className={css.title}>Dodaj nową ofertę</h2>
        <div className={css.inputs}>
          <label>
            <p className={css.para}>Podaj email</p>
            <Input
              placeholder='Email'
              value={email}
              typ='email'
              onChange={handleEmailChange}
            />
          </label>
          <label>
            <p className={css.para}>Wpisz hasło</p>
            <Input
              placeholder='Password'
              value={password}
              typ='password'
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <button className={css.btn} onClick={handleClick}>
          Wyslij
        </button>
      </div>
      <JobTraining />
    </div>
  );
};

export { Main };
