import Review from '@/components/review';
import Head from 'next/head';

export interface Review {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Props {
  reviews: Array<Review>;
}

const Reviews: React.FC<Props> = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Жирные бургеры | Отзывы</title>
        <meta name='title' content='Отзывы клиентов о жирных бургерах' />
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        {reviews.length && (
          <ul>
            {reviews.slice(0, 20).map((r) => (
              <Review key={r.id} body={r.body} id={r.id} name={r.name} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const reviews: Array<Review> = await res.json();

  return {
    props: {
      reviews,
    },
  };
}

export default Reviews;
