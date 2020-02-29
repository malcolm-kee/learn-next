import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import { Layout } from '../../components/layout';

const Post = ({ show }) => {
  return (
    <Layout>
      <Head>
        <title>{show.name}</title>
      </Head>
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl my-4">{show.name}</h1>
        <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        {show.image && <img src={show.image.medium} />}
      </div>
    </Layout>
  );
};

Post.getInitialProps = async function getInitialProps({ query }) {
  const res = await fetch(`https://api.tvmaze.com/shows/${query.id}`);
  const show = await res.json();

  return {
    show,
  };
};

export default Post;
