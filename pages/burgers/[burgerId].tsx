import { Burger } from '.';

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

const Details: React.FC = () => {
  return (
    <div>
      <h1>Detalis</h1>
    </div>
  );
};

export default Details;
