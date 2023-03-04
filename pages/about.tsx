import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Жирные бургеры | О нас</title>
        <meta
          name="title"
          content="Жирные бургеры - это старые добрые бургеры по классической рецептуре,
          нужных размеров и за приемлемую цену."
        />
      </Head>
      <div>
        <h1>O нас</h1>
        <p>
          Жирные бургеры - это старые добрые бургеры по классической рецептуре,
          нужных размеров и за приемлемую цену.
        </p>
        <p>
          Готовят их на американский, мексиканский и итальянский манер, не жалея
          ни соуса, ни начинки.
        </p>
        <p>
          Для тех, кто изрядно проголодался, есть необъятный «Самый жирный
          бургер» с пятью говяжьими котлетами, кукурузными чипсами и сыром.
        </p>
      </div>
    </>
  );
};

export default About;
