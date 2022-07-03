import { MouseEvent, memo } from 'react';
import cn from 'classnames';
import css from './MainBtn.module.css';

type Props = {
  className?: string;
  text: string;
  form?: FormData;
  onClick?: (event: MouseEvent) => void;
};

const MainBtn = memo(({ className, text, onClick }: Props) => {
  const classNames = cn(css.blue, className);
  return (
    <>
      <button onClick={onClick} className={classNames}>
        {text}
      </button>
    </>
  );
});
export { MainBtn };
