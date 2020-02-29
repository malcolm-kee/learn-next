import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import useSwr from 'swr';
import { Layout } from '../components/layout';

const fetcher = url => fetch(url).then(r => r.json());

const QuoteOfTheDay = () => {
  const { query } = useRouter();

  const { data, error } = useSwr(
    `/api/random-quote${query.author ? `?author=${query.author}` : ''}`,
    fetcher
  );

  const quote = error ? 'Fail to get quote' : data ? data.quote : 'Loading...';

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl my-3">Quote of the Day</h1>
        <p>{quote}</p>
        {data && data.author && <span>{data.author}</span>}
      </div>
    </Layout>
  );
};

export default QuoteOfTheDay;
