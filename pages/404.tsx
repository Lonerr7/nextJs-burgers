import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };

    // eslint-disable-next-line
  }, []);

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
