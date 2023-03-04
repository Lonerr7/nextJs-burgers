import Link from 'next/link';
import s from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={s.container}>
      <h1 className={`${s.title} font-effect-fire-animation`}>Главная</h1>
      <p className={s.text}>
        Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное
        мясо. О других составляющих начинки можно поспорить, ведь это дело
        вкуса.
      </p>
      <p className={s.text}>
        Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
        обслуживания, правильная атмосфера заведения.
      </p>
      <Link className={s.btn} href="/burgers">
        Все бургеры
      </Link>
    </main>
  );
}
