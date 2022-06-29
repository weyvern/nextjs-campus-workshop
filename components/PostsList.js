import PostCard from './PostCard';

const PostsList = ({ posts }) => {
  return (
    <div className='row'>
      {posts.length ? (
        posts.map(post => <PostCard key={post._id} post={post} />)
      ) : (
        <div>Seems like there&apos;re no articles!😔 Maybe write some of your own</div>
      )}
    </div>
  );
};

export default PostsList;
