import Link from "next/link";
import { FaEnvelopeOpen } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <div className="bg-[linear-gradient(rgba(15,23,43,.9),rgba(15,23,43,.9)),url('/images/bg-hero.jpg')] bg-center bg-no-repeat bg-cover relative overflow-hidden w-full py-20 mb-10">
        <div className="container mx-auto text-center pt-16 pb-10">
          <h1 className="text-6xl font-bold text-white mb-4 animate-slide-in-down">
            Contact Us
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="flex justify-center space-x-2 uppercase text-white text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white text-lg hover:underline transition"
                >
                  Home
                </Link>
              </li>
              <span className="text-xl">/</span>
              <li className="text-primary text-lg">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* contact section */}
      <div className="container mx-auto py-10 px-4">
        <div className="text-center mb-10">
          <h5 className="text-primary text-xl font-secondary tracking-wider">Contact Us</h5>
          <h1 className="text-2xl lg:text-4xl font-extrabold">Contact For Any Query</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h5 className="text-lg font-secondary tracking-wider text-primary mb-2">Booking</h5>
                <p className="flex items-center text-gray-700">
                  <FaEnvelopeOpen className="text-primary mr-2" />{" "}
                  book@example.com
                </p>
              </div>
              <div>
                <h5 className="text-lg font-secondary tracking-wider text-primary mb-2">General</h5>
                <p className="flex items-center text-gray-700">
                  <FaEnvelopeOpen className="text-primary mr-2" />{" "}
                  info@example.com
                </p>
              </div>
              <div>
                <h5 className="text-lg font-secondary tracking-wider text-primary mb-2">Technical</h5>
                <p className="flex items-center text-gray-700">
                  <FaEnvelopeOpen className="text-primary mr-2" />{" "}
                  tech@example.com
                </p>
              </div>
            </div>
            <iframe
              className="rounded w-full h-[296px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="peer w-full border border-gray-300 p-4 rounded focus:outline-none focus:border-primary"
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-gray-500 transform scale-90 top-4 left-4 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:scale-90"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="peer w-full border border-gray-300 p-4 rounded focus:outline-none focus:border-primary"
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-gray-500 transform scale-90 top-4 left-4 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:scale-90"
                  >
                    Your Email
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  placeholder=" "
                  className="peer w-full border border-gray-300 p-4 rounded focus:outline-none focus:border-primary"
                />
                <label
                  htmlFor="subject"
                  className="absolute text-gray-500 transform scale-90 top-4 left-4 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:scale-90"
                >
                  Subject
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  placeholder=" "
                  className="peer w-full border border-gray-300 p-4 h-36 rounded focus:outline-none focus:border-primary resize-none"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute text-gray-500 transform scale-90 top-4 left-4 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:scale-90"
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-primary font-semibold uppercase text-white py-3 rounded-sm hover:bg-blue-950 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
