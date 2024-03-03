const Footer = () => {
  return (
    <footer className="bg-blue-500 py-4 w-full">
      <div className="container mx-auto">
        <nav className="flex flex-col lg:flex-row justify-between items-center">
        <ul className="flex flex-col justify-center lg:justify-start space-x-6 lg:space-x-12 mb-4 lg:mb-0">
        <h3 className="text-blue-300 font-bold ml-12 mb-2">About Us </h3>
        <li>
          <a href="/services" className="text-white hover:text-gray-200">Our Services</a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-200">Contact Us</a>
        </li>
        {/* Additional links */}
        <li>
          <a href="/careers" className="text-white hover:text-gray-200">Careers</a>
        </li>
        <li>
          <a href="/people" className="text-white hover:text-gray-200">People</a>
        </li>
        <li>
          <a href="/past-sales" className="text-white hover:text-gray-200">Past Rent</a>
        </li>
      </ul>
      <ul className="flex flex-col justify-center lg:justify-start space-x-6 lg:space-x-12 lg:mb-0">
        <li>
          <a href="/reviews" className="text-white hover:text-gray-200 ml-12">Reviews</a>
        </li>
        <li>
          <a href="/faq" className="text-white hover:text-gray-200">FAQ</a>
        </li>
        <li>
          <a href="/press" className="text-white hover:text-gray-200">Press</a>
        </li>
      </ul>
      <div>
  <ul className="flex flex-col justify-center lg:justify-end space-y-2">
  <h3 className="text-blue-300 font-bold mb-2 ">Contacts</h3>
    
    <li>
      <p className="text-white">+97798065xxxxx</p>
    </li>
    <li>
      <p className="text-white">rentus@gmail.com</p>
    </li>
    <li>
      <a href="/appraisal" className="text-white hover:text-gray-200">Request an appraisal</a>
    </li>
    <li>
      <a href="/alerts" className="text-white hover:text-gray-200">Receive rental alerts</a>
    </li>
    <li>
      <a href="/rentalNepal" className="text-white hover:text-gray-200 mr-8">Visit our companion brand, RentalNepal </a>
    </li>
  </ul>
</div>



        </nav>
      </div>
    </footer>
  );
};

export default Footer;
