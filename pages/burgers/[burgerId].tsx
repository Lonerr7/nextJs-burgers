import Head from 'next/head';
import Image from 'next/image';
import { Burger } from '.';
import s from '../../styles/Burgers.module.css';

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/items');
  const burgers: Burger[] = await res.json();

  const paths = burgers.map((b) => ({
    params: { burgerId: b.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { burgerId } = context.params;

  const res = await fetch(`http://localhost:5000/items/${burgerId}`);
  const burger: Burger = await res.json();

  return {
    props: {
      burger,
    },
  };
};

interface Props {
  burger: Burger;
}

const Details: React.FC<Props> = ({ burger }) => {
  return (
    <>
      <Head>
        <title>Жирные бургеры | {burger.name}</title>
        <meta name="title" content={`Описание: ${burger.name}`} />
      </Head>
      <div className={s.singleBurger}>
        <h1>{burger.name}</h1>
        <div className={s.imageContainer}>
          <Image
            src={burger.image}
            alt={burger.name}
            width={400}
            height={300}
          />
        </div>
        <div>
          <p>{burger.desc}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
