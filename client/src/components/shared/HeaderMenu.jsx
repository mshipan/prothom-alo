import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

const HeaderMenu = () => {
  return (
    <div>
      <div className=" flex justify-between gap-4 border-t border-t-gray-200 border-b-2 border-b-gray-400">
        <div className=" w-[74%]">
          <Swiper
            slidesPerView={10}
            spaceBetween={20}
            scrollbar={{ hide: true }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide className="p-4">
              <Link className="hover:text-orange-500">সর্বশেষ</Link>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Link className="hover:text-orange-500">রাজনীতি</Link>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Link className="hover:text-orange-500">বাংলাদেশ</Link>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Link className="hover:text-orange-500">অপরাধ</Link>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Link className="hover:text-orange-500">বিশ্ব</Link>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Link className="hover:text-orange-500">বাণিজ্য</Link>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Link className="hover:text-orange-500">মতামত</Link>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Link className="hover:text-orange-500">খেলা</Link>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Link className="hover:text-orange-500">বিনোদন</Link>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Link className="hover:text-orange-500">চাকরি</Link>
            </SwiperSlide>
            <SwiperSlide className="p-4">
              <Link className="hover:text-orange-500">জীবনযাপন</Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex items-center">
          <div className="border-s-2 border-gray-300 h-6 hidden lg:block"></div>
          <Link className="items-center gap-1 p-4 hover:bg-orange-500 hover:text-white hidden lg:flex">
            <IoMdSearch size={20} />
            <span>খুঁজুন</span>
          </Link>
          <div className="border-s-2 border-gray-300 h-6 hidden lg:block"></div>
          <Link className="hidden lg:flex items-center gap-2 p-4 hover:bg-orange-500 hover:text-white">
            <FaUser />
            <span>Login</span>
          </Link>
          <div className="border-s-2 border-gray-300 h-6"></div>
          <Link className="flex items-center gap-2 p-4 hover:bg-orange-500 hover:text-white">
            <CgMenuGridO size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
