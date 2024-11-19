"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Reservation = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleVideoPlay = () => {
    setVideoSrc("https://www.youtube.com/embed/EdvbsPipOIw?si=W7SEhDDqTucqwA4D");
    setShowModal(true);
  };

  const handleModalClose = () => {
    setVideoSrc("");
    setShowModal(false);
  };

  return (
    <div id="reservation" className="container mx-auto py-10 px-4 md:px-0">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 relative">
          <div
            className="relative w-full h-72 md:h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/../../images/video-bg.jpg")',
            }}
          >
            <button
              type="button"
              className="text-white bg-primary p-4 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              onClick={handleVideoPlay}
            >
              <FaPlay className="text-3xl" />
            </button>
          </div>
        </div>

        {/* Reservation Form */}
        <div className="md:w-1/2 bg-dark flex items-center p-6 md:p-10">
          <div className="text-white w-full">
            <h5 className="text-primary text-xl font-secondary tracking-wider">Reservation</h5>
            <h1 className="text-2xl lg:text-4xl font-extrabold mb-6">Book A Table Online</h1>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold">
                <div className="form-group">
                  <label className="block text-sm mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm mb-1">Your Email</label>
                  <input
                    type="email"
                    className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm mb-1">Date & Time</label>
                  <input
                    type="datetime-local"
                    className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white"
                  />
                </div>
                <div className="form-group">
                  <label className="block text-sm mb-1">No Of People</label>
                  <select
                    className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white"
                  >
                    <option>People 1</option>
                    <option>People 2</option>
                    <option>People 3</option>
                    <option>People 4</option>
                  </select>
                </div>
                <div className="form-group md:col-span-2">
                  <label className="block text-sm mb-1">Special Request</label>
                  <textarea
                    className="w-full p-3 rounded border border-gray-700 bg-gray-800 text-white"
                    rows={4}
                    placeholder="Special Request"
                  ></textarea>
                </div>
                <div className="form-group md:col-span-2">
                  <button
                    type="submit"
                    className="bg-primary text-white py-3 px-6 rounded-sm mt-2 hover:bg-blue-950 transition duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/5 lg:w-1/2 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h5 className="text-lg">Youtube Video</h5>
              <button
                onClick={handleModalClose}
                className="text-black text-lg font-semibold"
              >
                &times;
              </button>
            </div>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoSrc}
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
