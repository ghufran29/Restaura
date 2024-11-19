"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCoffee, FaHamburger, FaUtensils } from "react-icons/fa";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

const menuItemsData = {
  breakfast: [
    {
      name: "Chicken Burger",
      price: "$115",
      description: "Ipsum ipsum clita erat amet dolor justo",
      image: "../../images/menu/menu-1.jpg",
    },
    {
      name: "Pancakes",
      price: "$85",
      description: "Dolor justo clita erat amet diam justo",
      image: "../../images/menu/menu-2.jpg",
    },
    {
      name: "Omelette",
      price: "$50",
      description: "Amet dolor ipsum clita erat amet justo",
      image: "../../images/menu/menu-3.jpg",
    },
    {
      name: "French Toast",
      price: "$70",
      description: "Clita erat amet dolor ipsum justo diam",
      image: "../../images/menu/menu-4.jpg",
    },
    {
      name: "Bagel & Cream Cheese",
      price: "$40",
      description: "Ipsum justo diam clita erat amet dolor",
      image: "../../images/menu/menu-5.jpg",
    },
    {
      name: "Breakfast Burrito",
      price: "$90",
      description: "Erat amet dolor ipsum justo diam clita",
      image: "../../images/menu/menu-6.jpg",
    },
    {
      name: "Avocado Toast",
      price: "$60",
      description: "Amet diam justo ipsum dolor clita",
      image: "../../images/menu/menu-7.jpg",
    },
    {
      name: "Smoothie Bowl",
      price: "$80",
      description: "Dolor ipsum justo clita erat amet",
      image: "../../images/menu/menu-8.jpg",
    },
    {
      name: "Scrambled Eggs",
      price: "$55",
      description: "Justo diam amet ipsum dolor clita",
      image: "../../images/menu/menu-3.jpg",
    },
    {
      name: "Granola & Yogurt",
      price: "$65",
      description: "Amet dolor justo ipsum diam clita",
      image: "../../images/menu/menu-4.jpg",
    },
  ],
  lunch: [
    {
      name: "Beef Burger",
      price: "$120",
      description: "Justo amet ipsum dolor clita diam",
      image: "../../images/menu/menu-1.jpg",
    },
    {
      name: "Grilled Chicken Salad",
      price: "$95",
      description: "Amet clita diam justo ipsum dolor",
      image: "../../images/menu/menu-2.jpg",
    },
    {
      name: "Steak Sandwich",
      price: "$150",
      description: "Dolor justo amet ipsum clita diam",
      image: "../../images/menu/menu-3.jpg",
    },
    {
      name: "Spaghetti Bolognese",
      price: "$110",
      description: "Clita justo amet ipsum dolor diam",
      image: "../../images/menu/menu-4.jpg",
    },
    {
      name: "Grilled Cheese",
      price: "$60",
      description: "Ipsum dolor justo clita diam amet",
      image: "../../images/menu/menu-5.jpg",
    },
    {
      name: "Caesar Salad",
      price: "$70",
      description: "Justo clita ipsum dolor amet diam",
      image: "../../images/menu/menu-6.jpg",
    },
    {
      name: "Veggie Wrap",
      price: "$75",
      description: "Amet dolor clita diam ipsum justo",
      image: "../../images/menu/menu-7.jpg",
    },
    {
      name: "Chicken Quesadilla",
      price: "$85",
      description: "Ipsum justo diam amet dolor clita",
      image: "../../images/menu/menu-8.jpg",
    },
    {
      name: "Margarita Pizza",
      price: "$90",
      description: "Dolor amet justo clita diam ipsum",
      image: "../../images/menu/menu-3.jpg",
    },
    {
      name: "Soup & Salad",
      price: "$65",
      description: "Clita diam justo amet ipsum dolor",
      image: "../../images/menu/menu-4.jpg",
    },
  ],
  dinner: [
    {
      name: "Roast Chicken",
      price: "$140",
      description: "Amet clita justo ipsum dolor diam",
      image: "../../images/menu/menu-1.jpg",
    },
    {
      name: "BBQ Ribs",
      price: "$160",
      description: "Dolor justo amet ipsum clita diam",
      image: "../../images/menu/menu-2.jpg",
    },
    {
      name: "Grilled Salmon",
      price: "$200",
      description: "Justo amet ipsum clita dolor diam",
      image: "../../images/menu/menu-3.jpg",
    },
    {
      name: "Lamb Chops",
      price: "$180",
      description: "Ipsum dolor justo amet diam clita",
      image: "../../images/menu/menu-4.jpg",
    },
    {
      name: "Pasta Carbonara",
      price: "$110",
      description: "Diam amet ipsum clita justo dolor",
      image: "../../images/menu/menu-5.jpg",
    },
    {
      name: "Veggie Stir-fry",
      price: "$75",
      description: "Justo clita amet ipsum dolor diam",
      image: "../../images/menu/menu-6.jpg",
    },
    {
      name: "Seafood Platter",
      price: "$220",
      description: "Dolor clita justo amet diam ipsum",
      image: "../../images/menu/menu-7.jpg",
    },
    {
      name: "Beef Wellington",
      price: "$250",
      description: "Amet ipsum dolor justo clita diam",
      image: "../../images/menu/menu-8.jpg",
    },
    {
      name: "Stuffed Bell Peppers",
      price: "$90",
      description: "Clita justo diam amet ipsum dolor",
      image: "../../images/menu/menu-3.jpg",
    },
    {
      name: "Mashed Potatoes",
      price: "$55",
      description: "Justo diam amet dolor ipsum clita",
      image: "../../images/menu/menu-5.jpg",
    },
  ],
};

const page = () => {
  const [activeTab, setActiveTab] = useState("breakfast");

  const renderMenuItems = () => {
    const items = menuItemsData[activeTab as keyof typeof menuItemsData];
    return items.map((item, index) => (
      <div key={index} className="flex items-center mb-4">
        <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
        <div className="flex flex-col pl-4 w-full text-left">
          <div className="flex justify-between border-b pb-2">
            <span className="font-extrabold text-lg">{item.name}</span>
            <span className="text-primary font-bold text-xl">{item.price}</span>
          </div>
          <p className="italic text-sm text-gray-500">{item.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="bg-[linear-gradient(rgba(15,23,43,.9),rgba(15,23,43,.9)),url('/images/bg-hero.jpg')] bg-center bg-no-repeat bg-cover relative overflow-hidden w-full py-20 mb-10">
        <div className="container mx-auto text-center pt-16 pb-10">
          <h1 className="text-6xl font-bold text-white mb-4 animate-slide-in-down">
            Food Menu
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
              <li className="text-primary text-lg">Menu</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Food Menu */}
      <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h5 className="text-primary text-xl font-secondary tracking-wider">Food Menu</h5>
        <h1 className="text-2xl lg:text-4xl font-extrabold">Most Popular Items</h1>
      </div>
      <div className="text-center mb-8">
        <ul className="flex justify-center border-b mb-5">
          <li
            className={`mx-3 pb-3 cursor-pointer ${activeTab === "breakfast" ? "border-b-2 border-primary text-primary" : ""}`}
            onClick={() => setActiveTab("breakfast")}
          >
            <div className="flex items-center">
              <FaCoffee className="text-4xl text-primary" />
              <div className="text-left pl-3">
                <small className="text-gray-500">Popular</small>
                <h6 className="font-extrabold text-dark">Breakfast</h6>
              </div>
            </div>
          </li>
          <li
            className={`mx-3 pb-3 cursor-pointer ${activeTab === "lunch" ? "border-b-2 border-primary text-primary" : ""}`}
            onClick={() => setActiveTab("lunch")}
          >
            <div className="flex items-center">
              <FaHamburger className="text-3xl text-primary" />
              <div className="text-left pl-3">
                <small className="text-gray-500">Special</small>
                <h6 className="font-extrabold text-dark">Lunch</h6>
              </div>
            </div>
          </li>
          <li
            className={`mx-3 pb-3 cursor-pointer ${activeTab === "dinner" ? "border-b-2 border-primary text-primary" : ""}`}
            onClick={() => setActiveTab("dinner")}
          >
            <div className="flex items-center">
              <FaUtensils className="text-3xl text-primary" />
              <div className="text-left pl-3">
                <small className="text-gray-500">Lovely</small>
                <h6 className="font-extrabold text-dark">Dinner</h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {renderMenuItems()}
      </div>
    </div>
    </>
  );
};

export default page;
