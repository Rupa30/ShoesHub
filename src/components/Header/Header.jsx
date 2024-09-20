import { useState } from "react";
import { assets } from "../../assets/assets"

const Home = () => {

  // State to track if the image is rotated
  const [isRotated, setIsRotated] = useState(false);

  // Function to toggle rotation on click
  const handleImageClick = () => {
    setIsRotated(!isRotated);  // Toggle the rotation state
  };

  return (
    <div className="fade-in flex flex-col h-3/4 sm:flex-row items-center sm:justify-between justify-center gap-10">
      <div className="relative z-10 flex flex-col sm:items-start items-center gap-10">
        <div className="flex flex-col sm:items-start items-center">
          <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">Boring Shoes?</p>
          <p className="text-xl md:text-2xl italic mt-2">Let us find you a cool pair</p>
          <p className="mt-4 text-sm">Tired of the same old boring shoes? Step into a world of fresh, trendy designs that are anything but ordinary. At ShoesHub, we&apos;re here to help you find the coolest pairs that match your unique style.
          </p>
          <button className="rounded-3xl px-4 mt-5 bg-gray-700 text-white p-2 cursor-pointer ">SHOP NOW</button>
        </div>
        <div className="flex items-center gap-20">
          <div className="flex flex-col items-center">
            <p className="font-bold text-3xl text-gray-700">90K+</p>
            <p>Collections</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-3xl text-gray-700">100K+</p>
            <p>Users</p>
          </div>
        </div>
      </div>

      <div className="relative mt-9 sm:mt-0 flex items-center justify-center sm:h-screen h-auto">
        <img className={`w-3/4 z-10 transform transition-transform duration-500 ease-in-out cursor-pointer ${isRotated ? '-rotate-12' : 'rotate-0'}`} src={assets.sneaker} alt="Sneaker" onClick={handleImageClick} />
        <p className="absolute text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300 z-0 transform -translate-y-1/2">
          GO! GET YOURS NOW...
        </p>
      </div>
    </div>
  )
}

export default Home