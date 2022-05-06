import { useEffect } from 'react';
import css from './NewJobForm.module.css';
import { Input } from '../../Input/Input';
import { useState, ChangeEvent, MouseEvent } from 'react';

// FUNCKJA WALIDUJACA EMAIL
function validateEmail(email: string) {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
    email === ''
  ) {
    return false;
  } else {
    return true;
  }
}

//FUNKCJA WALIDUJACA PASSWORD
function checkPassword(password: string) {
  if (password === '123' || password === '') {
    console.log('checkaPassword zwraca false - nie ma bledu $');
    return false;
  } else {
    console.log('checkaPassword zwraca true - jest blad $');
    return true;
  }
}

// *** *** *** FORM COMPONENT *** *** ***

const NewJobForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    email: '' || false,
    password: '' || false,
  });

  useEffect(() => {
    console.log('komponent wyrenderowany');
  }, []);

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();

    const validationError = checkPassword(password);
    setError((error) => ({
      ...error,
      password: validationError,
    }));
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    const validationError = validateEmail(email);
    setError((error) => ({
      ...error,
      email: validationError,
    }));
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <form className={css.form}>
      <h2 className={css.title}>Dodaj nową ofertę</h2>
      <div className={css.inputs}>
        <label>
          <p className={css.para}>Podaj email</p>
          <Input
            error={error.email}
            placeholder='Email'
            value={email}
            type='email'
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
        </label>
        <label>
          <p className={css.para}>Wpisz hasło</p>
          <Input
            error={error.password}
            placeholder='Password'
            value={password}
            type='password'
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <button className={css.btn} onClick={handleClick}>
        Wyslij
      </button>
    </form>
  );
};

export { NewJobForm };
