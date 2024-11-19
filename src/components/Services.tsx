import { FaUserTie, FaUtensils, FaCartPlus, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: FaUserTie,
    title: "Master Chefs",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: FaUtensils,
    title: "Quality Food",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: FaCartPlus,
    title: "Online Order",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    icon: FaHeadset,
    title: "24/7 Service",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
];

const Services = () => {
  return (
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
  );
};

export default Services;
