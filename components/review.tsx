import s from '../styles/Review.module.css';

interface Props {
  id: number;
  name: string;
  body: string;
}

const Review: React.FC<Props> = ({ body, id, name }) => {
  return (
    <li className={s.review}>
      <span>{id}</span> <p style={{ fontWeight: 700 }}>{name}</p>
      <p>{body}</p>
    </li>
  );
};

export default Review;
