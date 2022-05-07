import css from './MainBtn.module.css';

type Props = {
  text: string;
};

const MainBtn = ({ text }: Props) => {
  return (
    <>
      <button className={css.blue}>{text}</button>
    </>
  );
};
export { MainBtn };
