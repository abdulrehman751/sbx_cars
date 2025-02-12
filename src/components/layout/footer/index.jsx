import { footerLinks, socialLinks } from "@/constants/general";

const Footer = () => {
  return (
    <footer className='bg-white border-t py-8 px-4 md:px-16 text-black'>
      <div className='max-w-7xl mx-auto'>
        {/* Top Section: Logo, Newsletter & Social Icons */}
        <div className='flex flex-col lg:flex-row justify-between items-start text-left space-y-6 lg:space-y-0'>
          {/* Logo */}
          <div>
            <h2 className='text-2xl font-bold tracking-wide'>SBX | CARS</h2>
            <p className='text-sm text-gray-600'>SUPERCAR BLONDIE</p>
          </div>

          {/* Newsletter Subscription */}
          <div className='w-full md:w-auto'>
            <p className='text-gray-600 mb-2'>
              Get the latest updates by subscribing to our newsletter.
            </p>
            <div className='flex'>
              <input
                type='email'
                placeholder='Email Address'
                className='border border-gray-400 px-4 py-2 w-64 rounded-md focus:outline-none bg-white'
              />
              <button className='ml-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800'>
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className='flex space-x-4 text-black'>
            {socialLinks.map(({ icon: Icon }, index) => (
              <Icon
                key={index}
                className='w-6 h-6 cursor-pointer hover:text-gray-500'
              />
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-gray-600 text-sm'>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-black'>{section.title}</h3>
              <ul className='mt-2'>
                {section.links.map((link, i) => (
                  <li key={i} className='hover:text-black cursor-pointer mt-1'>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <p className='text-center text-gray-500 text-sm mt-6'>
          © Copyright 2025 All rights reserved SB Media USA Inc
        </p>
      </div>
    </footer>
  );
};

export default Footer;
