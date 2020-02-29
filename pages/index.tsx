import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../components/layout';

const PostLink = ({ id, title }: { id: number; title: string }) => (
  <>
    <Link href="/p/[id]" as={`/p/${id}`}>
      <a className="text-teal-900">{title}</a>
    </Link>
  </>
);

type Show = {
  id: number;
  name: string;
};

const Index: NextPage<{ shows: Show[] }> = ({ shows }) => {
  return (
    <Layout>
      <Head>
        <title>Learn Next.JS</title>
      </Head>
      <div className="max-w-6xl mx-auto p-3">
        <h1 className="text-3xl my-4">Hello NextJS</h1>
        <ul>
          {shows.map(show => (
            <li key={show.id}>
              <PostLink id={show.id} title={show.name} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function getInitialProps() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data: Array<{ show: Show }> = await res.json();

  return {
    shows: data.map(entry => entry.show),
  };
};

export default Index;
