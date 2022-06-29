const SinglePost = ({ post }) => {
  return (
    <div>
      <div className='row'>
        <img src={post.image} alt={post.title} style={{ height: '15vw', objectFit: 'cover' }} />
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <h1 className='text-center'>{post.title}</h1>
          <h5 className='text-center'>
            By: {post.author.firstName} {post.author.lastName}
          </h5>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
