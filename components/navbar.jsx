import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export  function Navbar({ navColor, imageSrc, textColor }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const colorVariants = {
    blue: 'bg-blue-600 hover:bg-blue-500',
    red: 'bg-red-600 hover:bg-red-500',
  };

  return (
    <nav className={`fixed z-10 w-full ${navColor} shadow-lg rounded-b-xl sm:rounded-b-lg`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-2 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center flex-shrink-0">
            {/* <Image src={imageSrc} height={144} width={144} alt="Your Name" /> */}
          </div>
          <div className="hidden sm:block sm:ml-6">
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className={textColor}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className={textColor}>
                  Nav?
                </Link>
              </li>
              <li>
                <Link href="#" className={textColor}>
                  Dataset
                </Link>
              </li>
              <li>
                <Link href="about" className={textColor}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex sm:hidden">
            <button
              type="button"
              id="mobile-menu-button"
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className={mobileMenuOpen ? 'hidden' : 'block w-6 h-6'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg
                className={mobileMenuOpen ? 'block w-6 h-6' : 'hidden'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className={mobileMenuOpen ? 'block' : 'hidden'} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className={`${colorVariants.blue} block px-3 py-2 text-base font-medium rounded-md ${textColor}`}>
Home
</Link>
        <Link href="#" className={`${colorVariants.blue}-2 block px-3 py-2 text-base font-medium rounded-md ${textColor}`}>
          Nav?
        </Link>

        <Link href="#" className={`${colorVariants.blue}-2 block px-3 py-2 text-base font-medium rounded-md ${textColor}`}>
          Dataset
        </Link>

        <Link href="#" className={`${colorVariants.blue}-2 block px-3 py-2 text-base font-medium rounded-md ${textColor}`}>
          About
        </Link>
      </div>
    </div>
  </div>
</nav>
    );}
