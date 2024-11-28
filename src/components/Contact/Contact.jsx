import Footer from "../../pages/Footer/Footer";
import { assets } from "../../assets/assets";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between mt-14 sm:mt-10 ">
      <h2 className="flex justify-center items-center text-xl sm:text-3xl text-red-500 font-semibold">Contact Us</h2>

      <div className="flex flex-col md:flex-row justify-around items-center gap-10 h-full py-10">
        <div className="hidden md:block">
          <img
            className="lg:h-96"
            src={assets.contactpage}
            alt="Shoes"
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-5 w-80">
            <input
              className="text-sm p-2 bg-transparent border-b-2 border-gray-300 focus:border-black focus:outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="text-sm p-2 bg-transparent border-b-2 border-gray-300 focus:border-black focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <input
              className="text-sm p-2 bg-transparent border-b-2 border-gray-300 focus:border-black focus:outline-none"
              type="number"
              placeholder="Number"
            />
            <input
              className="text-sm p-2 bg-transparent border-b-2 border-gray-300 focus:border-black focus:outline-none"
              type="text"
              placeholder="Country (Required)"
            />
            <input
              className="text-sm p-2 bg-transparent border-b-2 border-gray-300 focus:border-black focus:outline-none"
              type="text"
              placeholder="Comments"
            />
          </div>

          <div className="mt-5">
            <button className="bg-black text-white px-10 py-2 hover:bg-gray-800 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Contact;