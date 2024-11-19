import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[linear-gradient(rgba(15,23,43,.9),rgba(15,23,43,.9)),url('/images/bg-hero.jpg')] bg-center bg-no-repeat bg-cover relative overflow-hidden flex items-center justify-center py-20 mb-10 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8 space-y-12 lg:space-y-0 py-14">
          {/* Left Section (Text) */}
          <div className="w-full lg:w-5/12 text-center lg:text-left space-y-6">
            <h1 className="text-white text-5xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Enjoy Our
              <br />
              Delicious Meal
            </h1>
            <p className="text-white text-xs md:text-sm lg:text-lg">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
            <button className="bg-primary py-3 px-5 rounded-sm uppercase text-white font-semibold hover:bg-blue-950 transition duration-300">
              <Link href="#reservation">Book A Table</Link>
            </button>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
            <img
              className="w-full h-auto max-w-lg lg:max-w-2xl mx-auto lg:mx-0 animate-spin-slow"
              src="/images/hero.png"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
