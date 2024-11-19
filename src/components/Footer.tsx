import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-10 mt-10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h4 className="text-primary text-xl font-secondary tracking-wider mb-4">Company</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-300 hover:text-white block mb-2">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white block mb-2">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white block mb-2">
                  Reservation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white block mb-2">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white block mb-2">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary text-xl font-secondary tracking-wider mb-4">Contact</h4>
            <p className="flex items-center mb-2 text-gray-300">
              <FaMapMarkerAlt className="mr-3" />
              123 Street, New York, USA
            </p>
            <p className="flex items-center mb-2 text-gray-300">
              <FaPhoneAlt className="mr-3" />
              +012 345 67890
            </p>
            <p className="flex items-center mb-2 text-gray-300">
              <FaEnvelope className="mr-3" />
              info@example.com
            </p>
            <div className="flex space-x-3 pt-4">
              <a
                href="#"
                className="text-light hover:text-primary p-2 border rounded-full border-gray-500"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-light hover:text-primary p-2 border rounded-full border-gray-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-light hover:text-primary p-2 border rounded-full border-gray-500"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="text-light hover:text-primary p-2 border rounded-full border-gray-500"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Opening */}
          <div>
            <h4 className="text-primary text-xl font-secondary tracking-wider mb-4">Opening</h4>
            <p className="text-gray-300">
              <span className="font-semibold">Monday - Saturday:</span> 09AM - 09PM
            </p>
            <p className="text-gray-300 mt-2">
              <span className="font-semibold">Sunday:</span> 10AM - 08PM
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-primary text-xl font-secondary tracking-wider mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <div className="relative max-w-xs">
              <input
                type="text"
                placeholder="Your email"
                className="w-full py-3 px-4 rounded-md text-dark border border-primary focus:outline-none"
              />
              <button className="absolute top-0 right-0 mt-1 mr-1 px-4 py-2 uppercase font-semibold bg-primary text-white rounded-md hover:bg-blue-950 transition duration-300">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
            &copy;{" "}
            <a href="/" className="text-primary hover:underline">
            Restaura
            </a>
            , All Rights Reserved. Designed & Developed By{" "}
            <a
              href="https://github.com/ghufran29"
              className="text-primary hover:underline"
            >
              M.Ghufran
            </a>
          </div>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
            <a href="#" className="hover:text-white">
              Help
            </a>
            <a href="#" className="hover:text-white">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
