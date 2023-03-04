import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1>Ой...</h1>
      <h2>Такой страницы здесь нет!</h2>
      <p>
        Перейти на <Link href="/">Главную страницу</Link>
      </p>
    </div>
  );
};

export default NotFound;
