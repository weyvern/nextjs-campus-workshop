import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark' aria-label='Second navbar example'>
      <div className='container-fluid'>
        <Link href='/'>
          <a className='navbar-brand'>Cities in the world! ✈️🌍</a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarsExample02'
          aria-controls='navbarsExample02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarsExample02'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link href='/'>
                <a className='nav-link'>Home</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/about' className='nav-link'>
                <a className='nav-link'>about</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
