import About from '@/components/About'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className="bg-[linear-gradient(rgba(15,23,43,.9),rgba(15,23,43,.9)),url('/images/bg-hero.jpg')] bg-center bg-no-repeat bg-cover relative overflow-hidden w-full py-20 mb-10">
        <div className="container mx-auto text-center pt-16 pb-10">
          <h1 className="text-6xl font-bold text-white mb-4 animate-slide-in-down">
            About Us
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
              <li className="text-primary text-lg">About</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* About Section */}
      <About/>
      {/* Team Section */}
      <Team/>
      {/* Testimonials Section */}
      <Testimonials/>
    </>
  )
}

export default page