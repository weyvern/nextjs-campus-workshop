import SinglePost from '../../components/SinglePost';

export const getStaticPaths = async () => {
  const res = await fetch('https://wd026-blog-backend.herokuapp.com/posts');
  const posts = await res.json();
  const paths = posts.map(post => ({ params: { id: post._id } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params: { id } }) => {
  const res = await fetch(`https://wd026-blog-backend.herokuapp.com/posts/${id}`);
  const post = await res.json();
  if (post.error)
    return {
      notFound: true
    };
  return { props: { post, revalidate: 10 } };
};

const Post = ({ post }) => {
  return <SinglePost post={post} />;
};

export default Post;
