import Link from 'next/link';
import { SiBurgerking } from 'react-icons/si';

const Header = () => {
  return (
    <header>
      <div>
        <SiBurgerking />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Домой</Link>
          </li>
          <li>
            <Link href="/about">О нас</Link>
          </li>
          <li>
            <Link href="/reviews">Отзывы</Link>
          </li>
          <li>
            <Link href="/burgers">Бургеры</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
