import { useRouter } from 'next/router';
import { Layout } from '../components/layout';

function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is content</p>
    </Layout>
  );
}

export default Post;
