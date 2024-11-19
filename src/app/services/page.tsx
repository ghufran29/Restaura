import Link from "next/link";
import { FaUserTie, FaUtensils, FaCartPlus, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: FaUserTie,
    title: "Master Chefs",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: FaUtensils,
    title: "Quality Food",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: FaCartPlus,
    title: "Online Order",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: FaHeadset,
    title: "24/7 Service",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: FaUserTie,
    title: "Master Chefs",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: FaUtensils,
    title: "Quality Food",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: FaCartPlus,
    title: "Online Order",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: FaHeadset,
    title: "24/7 Service",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
];

const page = () => {
  return (
    <>
      <div className="bg-[linear-gradient(rgba(15,23,43,.9),rgba(15,23,43,.9)),url('/images/bg-hero.jpg')] bg-center bg-no-repeat bg-cover relative overflow-hidden w-full py-20 mb-10">
        <div className="container mx-auto text-center pt-16 pb-10">
          <h1 className="text-6xl font-bold text-white mb-4 animate-slide-in-down">
            Services
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
              <li className="text-primary text-lg">Service</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="text-center mb-12">
        <h5 className="text-primary text-xl font-secondary tracking-wider">Our Services</h5>
        <h1 className="text-2xl lg:text-4xl font-extrabold">Explore Our Services</h1>
      </div>
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-md py-8 px-8 mx-3 text-left transition duration-300 transform hover:bg-primary hover:text-white shadow-lg"
            >
              <div className="flex flex-col items-left">
                <service.icon
                  className="text-primary mb-4 transition duration-300 group-hover:text-white"
                  size={48}
                />
                <h5 className="text-lg font-extrabold mb-2 group-hover:text-white">
                  {service.title}
                </h5>
                <p className="text-sm group-hover:text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
