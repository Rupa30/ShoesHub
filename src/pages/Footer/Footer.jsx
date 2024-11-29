import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="h-36 m-0 p-0 flex flex-col justify-around">
      <div className="h-1 w-full bg-slate-200 rounded-xl"></div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-4">
        <p className="font-bold text-2xl md:text-3xl mb-2"><a href="#navbar">ShoesHub.</a></p>

        <div className='flex flex-col items-center justify-center gap-1'>
          <p className='text-center'>Copyright 2024 © shoeshub.com - All Rights Reserved</p>
          <p>Made by <span className="italic">Rupa✨</span></p>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex gap-4 mb-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareXTwitter} className="text-xl hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-xl hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:scale-110 transition-transform duration-200" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
