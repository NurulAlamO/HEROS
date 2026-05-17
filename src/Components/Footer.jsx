import { Link } from 'react-router-dom';
import twitter from '../assets/Frame 1171277687.png';
import linkin from '../assets/fi_145807.png';
import faccebook from '../assets/fi_5968764.png';
import logo from '../assets/logo-D9NHcesw 1.png'

export default function Footer() {
  return (
    <footer className="footer-horizontal mt-auto border-t border-base-300 bg-black">
      <div className="flex gap-8 px-4 pt-8
        justify-between
        md:px-20 sm:px-5  text-white">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <img src={logo} alt="" />
            <h3 className="text-lg font-bold  text-white">Hero IO</h3>
          </Link>
          <div>
            <h4 className="mb-3 font-semibold">Social Links</h4>
            <div className='flex gap-3'> 
              <img src={twitter} alt="" srcset="" />
              <img src={linkin} alt="" srcset="" />
              <img src={faccebook} alt="" srcset="" />
            </div>
          </div>
      </div>
      <div className='px-16'>
        <p className='border-2 border-solid'></p>
      </div>
      
          <p className="mt-4 text-center p-6 text-xs  text-white">
            Copyright © 2025 - All right reserved
          </p>
    </footer>
  );
}
