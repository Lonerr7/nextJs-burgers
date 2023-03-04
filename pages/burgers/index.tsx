export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items');
  const burgers = await res.json();

  return {
    props: {
      burgers,
    },
  };
};

interface Burger {
  name: string;
  image: string;
  desc: string;
  price: number;
  id: number;
}

interface Props {
  burgers: Array<Burger>;
}

const Burgers: React.FC<Props> = ({ burgers }) => {
  console.log(burgers);

  return (
    <div>
      <h1>Наши бургеры</h1>
    </div>
  );
};

export default Burgers;
