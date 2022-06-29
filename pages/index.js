import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.POSTS_API}/posts`);
  const posts = await res.json();
  return {
    props: { posts },
    revalidate: 10
  };
};
import PostsList from '../components/PostsList';

const Home = ({ posts }) => {
  return (
    <main>
      <div className='container mt-5'>
        <PostsList posts={posts} />
      </div>
    </main>
  );
};

export default Home;
