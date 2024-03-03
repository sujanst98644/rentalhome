import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white py-4 w-full">
      <div className="w-full">
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex justify-start space-x-6 lg:space-x-12">
            <li className="mr-6">
              <Link legacyBehavior href="/">
                <a className="text-black hover:text-gray-300 ml-8">Home</a>
              </Link>
            </li>
          </ul>
          <ul className="flex justify-end space-x-6 lg:space-x-12">
            <li className="mr-6">
              <Link legacyBehavior href="/rooms">
                <a className="text-black hover:text-gray-300">Find Rooms</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link legacyBehavior href="/add-room">
                <a className="text-black hover:text-gray-300">Rent Rooms</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="text-black hover:text-gray-300">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/signin">
                <a className="text-black hover:text-gray-300">Sign In</a>
              </Link>
            </li>
            <li className=''>
              <Link legacyBehavior href="/signup">
                <a className="text-black hover:text-gray-300 mr-8">Sign Up</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
