import css from './BlueBtn.module.css';

type Props = {
  text: string;
};

const BlueBtn = ({ text }: Props) => {
  return (
    <div>
      <button className={css.blue}>{text}</button>
    </div>
  );
};
export { BlueBtn };
