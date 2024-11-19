import { FaUtensils } from "react-icons/fa";
import Image from "next/image";
import about1 from "../../public/images/about/about-1.jpg";
import about2 from "../../public/images/about/about-2.jpg";
import about3 from "../../public/images/about/about-3.jpg";
import about4 from "../../public/images/about/about-4.jpg";

const About = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Image Section */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 lg:mr-10">
          <div className="w-full h-full">
            <Image
              src={about1}
              alt="About Image 1"
              className="rounded-lg object-cover"
              layout="responsive"
              width={200}
              height={200}
            />
          </div>
          <div className="w-3/4 mt-6 sm:mt-12 lg:mt-20">
            <Image
              src={about2}
              alt="About Image 2"
              className="rounded-lg object-cover"
              layout="responsive"
              width={150}
              height={150}
            />
          </div>
          <div className="w-3/4 ml-auto mt-6 sm:mt-0">
            <Image
              src={about3}
              alt="About Image 3"
              className="rounded-lg object-cover"
              layout="responsive"
              width={150}
              height={150}
            />
          </div>
          <div className="w-full h-full mt-6 sm:mt-0">
            <Image
              src={about4}
              alt="About Image 4"
              className="rounded-lg object-cover"
              layout="responsive"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 px-5">
          <h5 className="text-primary font-secondary tracking-wider text-xl text-center lg:text-left">About Us</h5>
          <h1 className="text-2xl lg:text-4xl font-extrabold text-dark mb-4 flex items-center justify-center lg:justify-start">
            Welcome to <FaUtensils className="text-primary mx-2" /> Restaura
          </h1>
          <p className="text-gray-700 mb-4 text-center lg:text-left">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
          </p>
          <p className="text-gray-700 mb-6 text-center lg:text-left">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </p>

          {/* Stats Section */}
          <div className="flex flex-col sm:flex-row gap-10 mb-8">
            <div className="flex items-center border-l-4 border-primary pl-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary">15+</h1>
              <div className="ml-4">
                <p className="text-gray-600">Years of</p>
                <h6 className="font-extrabold uppercase text-dark">Experience</h6>
              </div>
            </div>
            <div className="flex items-center border-l-4 border-primary pl-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary">26+</h1>
              <div className="ml-4">
                <p className="text-gray-600">Popular</p>
                <h6 className="font-extrabold uppercase text-dark">Master Chefs</h6>
              </div>
            </div>
          </div>

          {/* Read More Button */}
          <a
            className="bg-primary hover:bg-primary-dark text-white py-3 px-5 rounded-sm transition duration-300 inline-block text-center uppercase hover:bg-blue-950"
            href="#"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
