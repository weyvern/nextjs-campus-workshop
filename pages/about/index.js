const About = () => {
  return (
    <main>
      <div className='container mt-5'>
        <h1>
          This app is powered by{' '}
          <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
            NextJS
          </a>
        </h1>
        <div className='row'>
          If you want to work locally:
          <ul>
            <li>
              Clone this repo:{' '}
              <a
                href='https://github.com/weyvern/nextjs-campus-workshop'
                target='_blank'
                rel='noreferrer'
              >
                https://github.com/weyvern/nextjs-campus-workshop
              </a>
            </li>
            <li>Move into the app directory</li>
            <li>
              Create a .env.local file with a variable called <code>POSTS_API</code> set to{' '}
              <code>https://wd026-blog-backend.herokuapp.com</code>
            </li>
            <li>
              Run <code>npm install && npm run dev</code>
            </li>
            <li>
              Check the{' '}
              <a href='https://nextjs.org/docs/getting-started' target='_blank' rel='noreferrer'>
                docs!
              </a>
              !
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
