import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaSearchLocation,
  FaRegEnvelope,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-20">
      <div className="container px-4 py-6 mx-auto sm:px-6 lg:px-8 lg:pt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p className="max-w-md mx-auto leading-normal text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            <ul className="flex justify-center gap-6 mt-6 md:gap-8 sm:justify-start">
              <li>
                <a
                  href="/"
                  className="text-white transition hover:text-amber-400"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-white transition hover:text-amber-400"
                >
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-white transition hover:text-amber-400"
                >
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-white transition hover:text-amber-400"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Useful Links</p>

              <ul className="space-y-4 text-sm mt-6">
                <li>
                  <a
                    className="text-white transition hover:text-amber-400"
                    href="/"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-amber-400"
                    href="/"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-amber-400"
                    href="/"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Links</p>

              <ul className="space-y-4 text-sm mt-6">
                <li>
                  <a
                    className="text-white transition hover:text-amber-400"
                    href="/"
                  >
                    Link 1
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-amber-400"
                    href="/"
                  >
                    Link 2
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-amber-400"
                    href="/"
                  >
                    Link 3
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Links</p>

              <ul className="space-y-4 text-sm mt-6">
                <li>
                  <a
                    className="text-white transition hover:text-amber-400"
                    href="/"
                  >
                    Link 1
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-amber-400"
                    href="/"
                  >
                    Link 2
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center sm:justify-start gap-1.5 group"
                    href="/"
                  >
                    <FaRegEnvelope className="w-5 h-5 text-white shrink-0" />

                    <span className="text-white transition group-hover:text-amber-400">
                      abcd@efgh.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center sm:justify-start gap-1.5 group"
                    href="/"
                  >
                    <FaPhoneAlt className="w-5 h-5 text-white shrink-0" />

                    <span className="text-white transition group-hover:text-amber-400">
                      0123456789
                    </span>
                  </a>
                </li>

                <li className="flex items-center justify-center sm:justify-start gap-1.5 group">
                  <FaSearchLocation className="w-5 h-5 text-white shrink-0" />

                  <span className="text-white transition group-hover:text-amber-400">
                    123 abcd, efgh, igklmnop
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
