import { assets } from "../../assets/assets"

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">Boring Shoes?</p>
          <p className="text-xl md:text-2xl italic mt-2">Let us find you a cool pair</p>
          <p className="mt-4 text-sm">Tired of the same old boring shoes? Step into a world of fresh, trendy designs that are anything but ordinary. At ShoesHub, we&apos;re here to help you find the coolest pairs that match your unique style.
          </p>
          <button className="rounded mt-4 bg-gray-700 text-white p-2 cursor-pointer ">SHOP NOW</button>
        </div>
        <div className="flex items-center gap-20">
          <div>
            <p className="font-bold text-3xl text-gray-700">90K+</p>
            <p>Collections</p>
          </div>
          <div>
            <p className="font-bold text-3xl text-gray-700">100K+</p>
            <p>Users</p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center sm:h-screen h-auto">
        <img className="w-3/4 z-10" src={assets.sneaker} alt="Sneaker" />
        <p className="absolute text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 z-0 transform -translate-y-1/2">
          GO! GET YOURS NOW...
        </p>
      </div>
    </div>
  )
}

export default Home