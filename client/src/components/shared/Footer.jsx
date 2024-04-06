import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <biv className="container mx-auto py-4 px-2  text-center text-surface/75 lg:text-left">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-cols-1 justify-center items-start grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* সম্পাদকীয় section */}
            <div className="flex flex-col gap-6">
              <h1 className=" font-semibold underline underline-offset-8">
                সম্পাদকীয়
              </h1>
              <div>
                <p>সম্পাদক ও প্রকাশক : বদর উদ্দিন আহমদ</p>
                <p>নির্বাহী সম্পাদক : ভীষ্ম দেব</p>
                <p>বার্তা সম্পাদক : সাইমুম ইসলাম সীমান্ত</p>
              </div>
            </div>

            {/* <!-- Useful links section --> */}
            <div className="flex flex-col gap-4">
              <h1 className=" font-semibold underline underline-offset-8">
                Useful links
              </h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="/" className="hover:underline">
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline ">
                    সাইটম্যাপ
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline ">
                    ভিডিও গ্যালারী
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline ">
                    ফটোগ্যালারী
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline ">
                    আমাদের পরিবার
                  </Link>
                </li>
              </ul>
            </div>

            {/* <!-- Useful links section --> */}
            <div className="flex flex-col gap-4">
              {/* <h1 className=" font-semibold underline underline-offset-8"></h1> */}
              <ul className="flex flex-col gap-2">
                <h1 className=" font-semibold underline underline-offset-8 hidden md:block">
                  <br />
                </h1>
                <li>
                  <Link to="/" className="hover:underline">
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline ">
                    সাইটম্যাপ
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline ">
                    ভিডিও গ্যালারী
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline ">
                    ফটোগ্যালারী
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline ">
                    আমাদের পরিবার
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- Contact section --> */}
            <div className="flex flex-col gap-4">
              <h1 className=" font-semibold underline underline-offset-8">
                অফিস
              </h1>
              <div>
                <p>
                  অফিস : এ আই নান্নু টাওয়ার লিফট এর ৬ রুম নং ৬ বি মিরপুর ডি ও
                  এইচ এস ১ নং গেট সংলগ্ন
                </p>
                <p>ইমেইল : example2@gmail.com</p>
                <p>মোবাইল : 01329747923</p>
              </div>
              <div className="flex justify-center md:justify-start text-gray-600">
                <Link className="me-4">
                  <div className="border-2 border-gray-600 hover:border-blue-700 hover:bg-blue-700 hover:text-white rounded-full size-8 flex items-center justify-center">
                    <FaFacebookF />
                  </div>
                </Link>
                <Link className="me-4">
                  <div className="border-2 border-gray-600 hover:border-blue-500 hover:bg-blue-500 hover:text-white rounded-full size-8 flex items-center justify-center">
                    <FaTwitter />
                  </div>
                </Link>
                <Link className="me-4">
                  <div className="border-2 border-gray-600 hover:border-red-500 hover:bg-red-500 hover:text-white rounded-full size-8 flex items-center justify-center">
                    <FaYoutube />
                  </div>
                </Link>
                <Link className="me-4">
                  <div className="border-2 border-gray-600 hover:border-red-500 from-red-500 to-orange-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white rounded-full size-8 flex items-center justify-center">
                    <FaInstagram />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </biv>

      <div className="flex justify-center text-center flex-row gap-1 text-gray-600 border-t border-t-gray-400 p-2 text-sm md:text-base">
        <span>© 2024 Copyright:</span>
        <Link className="font-medium hover:text-orange-500">
          SB MAX IT PARK
        </Link>
      </div>
    </div>
  );
};

export default Footer;
