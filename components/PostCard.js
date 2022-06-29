import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div key={post._id} className='col-md-4 mb-4'>
      <div className='card'>
        <img
          src={post.image}
          className='card-img-top'
          style={{ objectFit: 'cover', height: '10rem' }}
          alt={post.title}
        />
        <div className='card-body text-center'>
          <h5 className='card-title'>{post.title}</h5>
          <h6 className='card-subtitle'>
            By: {post.author.firstName} {post.author.lastName}
          </h6>
          <Link href={`/posts/${post._id}`}>
            <a className='mt-4 btn btn-primary btn-sm'>More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
