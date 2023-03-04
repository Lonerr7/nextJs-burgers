import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import s from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Жирные бургеры | Главная страница</title>
        <meta name="title" content="Жирные бургеры" />
      </Head>
      <main className={s.container}>
        <h1 className={`${s.title} font-effect-fire-animation`}>Главная</h1>
        <div className={s.mainImage}>
          <Image
            src="/fatburger.png"
            alt="burger"
            width={400}
            height={300}
            priority
          />
        </div>
        <p className={s.text}>
          Что такое идеальный бургер? Лист свежего салата, мягкие булочки,
          сочное мясо. О других составляющих начинки можно поспорить, ведь это
          дело вкуса.
        </p>
        <p className={s.text}>
          Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
          обслуживания, правильная атмосфера заведения.
        </p>
        <Link className={s.btn} href="/burgers">
          Все бургеры
        </Link>
      </main>
    </>
  );
}
