import { Link } from "react-router-dom";
import TopLogo from "../../assets/logo1.png";
import SmallNewsCard from "./SmallNewsCard";
import { FaUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const HeaderTop = () => {
  return (
    <div>
      <div className="pt-4 pb-6 flex justify-between items-center gap-5">
        <div className="w-6/12 lg:w-4/12">
          <img className="w-[264px] h-[64]" src={TopLogo} alt="" />
        </div>
        <div className="lg:flex hidden justify-end items-center gap-1 lg:gap-2 xl:gap-4 w-8/12">
          <SmallNewsCard />
          <div className="border-s border-gray-300 h-14"></div>
          <SmallNewsCard />
          <div className="border-s border-gray-300 h-14"></div>
          <SmallNewsCard />
        </div>
        <div className="lg:hidden flex justify-center items-center gap-2">
          <IoMdSearch size={20} />
          <div className="border-s-2 border-gray-300 h-6"></div>
          <Link className="flex items-center gap-2">
            <FaUser />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
