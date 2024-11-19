"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      designation: "Head Chef",
      image: "../../images/team/team-1.jpg",
      links: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Jane Smith",
      designation: "Sous Chef",
      image: "../../images/team/team-2.jpg",
      links: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Robert Brown",
      designation: "Pastry Chef",
      image: "../../images/team/team-3.jpg",
      links: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Emily Davis",
      designation: "Line Chef",
      image: "../../images/team/team-4.jpg",
      links: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center mb-12">
        <h5 className="text-primary text-xl font-secondary tracking-wider">Team Members</h5>
        <h1 className="text-2xl lg:text-4xl font-extrabold">Our Master Chefs</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative py-6 px-12 group bg-white shadow-md rounded-lg overflow-hidden transition-all duration-500"
          >
            <div className="overflow-hidden rounded-full mx-auto mt-4 w-44 h-44">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-8">
              <h5 className="font-extrabold text-lg">{member.name}</h5>
              <small className="text-gray-500">{member.designation}</small>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-primary p-4 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500">
              <div className="flex justify-center space-x-4">
                <a
                  href={member.links.facebook}
                  className="hover:text-gray-300"
                >
                  <FaFacebookF />
                </a>
                <a href={member.links.twitter} className="hover:text-gray-300">
                  <FaTwitter />
                </a>
                <a
                  href={member.links.instagram}
                  className="hover:text-gray-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
