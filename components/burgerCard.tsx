import Image from 'next/image';
import Link from 'next/link';
import s from '../styles/Burgers.module.css';

interface Props {
  name: string;
  image: string;
  desc: string;
  id: string;
}

const BurgerCard: React.FC<Props> = ({ name, desc, id, image }) => {
  return (
    <li>
      <Link className={s.burgerCard} href={`/burgers/${id}`}>
        <div
          className={s.imageContainer}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <Image
            src={image}
            alt={name}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div>
          <h3 className={s.burgerCard__title}>{name}</h3>
          <p>{desc}</p>
        </div>
      </Link>
    </li>
  );
};

export default BurgerCard;
