import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTags } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className='min-h-screen mt-14 sm:mt-10 ' id='about'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-16 md:gap-20 px-4 md:px-8'>

        {/* Left Section */}
        <div className='relative hidden md:block'>
          <div className='bg-gray-300 rounded-full h-72 w-72 lg:h-96 lg:w-96 mx-auto'> </div>
          <img className='absolute transform -translate-y-full' src={assets.logshoes} alt="Shoes" />
        </div>

        {/* Right Section */}
        <div className='flex flex-col justify-between gap-8 md:gap-10 w-full'>
          <div className='flex flex-col justify-between items-start gap-4'>
            <h1 className='text-3xl md:text-4xl font-semibold text-red-500'>About Us</h1>
            <p className='text-sm md:text-base'>
              At ShoesHub, we are committed to delivering high-quality footwear that combines style, comfort, and durability.
              Our passion for shoes drives us to innovate and create designs that cater to a diverse range of customers.
            </p>
          </div>

          <div className='flex flex-col justify-between items-start gap-6'>
            <div className="flex flex-row justify-between items-center gap-6">
              <div className='outline outline-1 h-10 w-16 rounded-md flex items-center justify-center'>
                <FontAwesomeIcon icon={faStar} className=" text-blue-500 text-xl" />
              </div>
              <div className='flex flex-col justify-between items-start gap-2'>
                <span className="text-lg font-medium">Best Quality Shoes</span>
                <p className='text-sm md:text-base'>Our shoes are crafted with the finest materials, ensuring that every pair offers superior comfort and lasting performance.</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center gap-6">
              <div className='outline outline-1 h-10 w-16 rounded-md flex items-center justify-center'>
                <FontAwesomeIcon icon={faTags} className=" text-green-500 text-xl" />
              </div>
              <div className='flex flex-col justify-between items-start gap-2'>
                <span className="text-lg font-medium">Best Pricing</span>
                <p className='text-sm md:text-base'>We believe in providing exceptional value, offering top-quality shoes at competitive prices to make them accessible to everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
