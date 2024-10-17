import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex w-full mt-52 justify-center relative">
      <img
        src="/images/footer-bg-img.webp"
        className="h-[430px] w-full object-cover"
      />
      <div className="absolute  flex flex-col md:flex-row    ">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <Image src="/images/footer-logo-img.webp" width={245} height={68} />
            <p className="text-gray-100 text-xs md:text-sm">
              Sign up for exclusive discounts, content, and more!
            </p>
          </div>
          <div className="mt-4 md:mt-11 w-full max-w-xs">
            <div className="flex items-center p-2 relative">
              <input
                className="border text-gray-200 w-[400px] border-gray-300 rounded-l-full  rounded-r-full bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                id="input_comp-ljrcgl0v"
                type="email"
                pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                placeholder="Your email"
              />
              <button className="bg-blue-500 absolute right-2 text-white rounded-full p-2 hover:bg-blue-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 w-full overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="p-2 text-left text-gray-200">About:</th>
                <th className="p-2 text-left text-gray-200">Products:</th>
                <th className="p-2 text-left text-gray-200">Follow us:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2"></td>
                <td className="p-2 text-gray-200 cursor-pointer">
                  Welcome Walks
                </td>
                <td className="p-2">
                  <Image
                    src="/icons/insta-icon.png"
                    alt="Instagram"
                    width={18}
                    height={18}
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2 text-gray-200">Our Story</td>
                <td className="p-2 text-gray-200 cursor-pointer">
                  Armchair Journeys
                </td>
                <td className="p-2"></td>
              </tr>
              <tr>
                <td className="p-2 text-gray-200">Careers</td>
                <td className="p-2"></td>
                <td className="p-2 text-gray-200 cursor-pointer">
                  <Image
                    src="/icons/fb-icon.webp"
                    alt="Facebook"
                    width={18}
                    height={18}
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2 text-gray-200">Investors</td>
                <td className="p-2 text-gray-200 cursor-pointer">
                  Welcome Events
                </td>
                <td className="p-2">
                  <Image
                    src="/icons/tiktok-icon.png"
                    alt="TikTok"
                    width={18}
                    height={18}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Footer;
