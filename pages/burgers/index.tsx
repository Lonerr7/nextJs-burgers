import BurgerCard from '@/components/burgerCard';
import Head from 'next/head';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items');
  const burgers = await res.json();

  return {
    props: {
      burgers,
    },
  };
};

export interface Burger {
  name: string;
  image: string;
  desc: string;
  id: string;
  price: number;
}

interface Props {
  burgers: Array<Burger>;
}

const Burgers: React.FC<Props> = ({ burgers }) => {
  return (
    <>
      <Head>
        <title>Жирные бургеры | Наши бургеры</title>
        <meta name="title" content="Здесь собраны все наши бургеры" />
      </Head>
      <div>
        <h1>Наши бургеры</h1>
        <ul>
          {burgers.map((b) => (
            <BurgerCard
              key={b.id}
              desc={b.desc}
              id={b.id}
              image={b.image}
              name={b.name}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Burgers;
