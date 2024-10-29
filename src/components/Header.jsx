import Logo from "../assets/logo.png";
import User_Icon from "../assets/user.png";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Header = ({ searchInput, setSearchInput, setVal }) => {
  const handlesubmit = (e) => {
    e.preventDefault();
    setVal(true);
  };

  return (
    <div className="w-full border-b-[2px] border-[#3c3c3c] bg-opacity-75 h-[60px] md:h-[70px]">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to="/" className="cursor-pointer">
          <img src={Logo} className="w-[100px] md:w-[120px]" alt="Logo" />
        </Link>
        
        <ul className="hidden md:flex text-white ml-5 space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">Movies</Link>
          </li>
        </ul>

        <div className="ml-auto flex items-center gap-3 md:gap-5">
          <form className="flex items-center">
            <input
              className="text-white bg-transparent px-2 py-1 outline-none border-b  focus:border-white transition-colors placeholder:text-gray-300 md:px-4"
              type="text"
              placeholder="Search here..."
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button
              onClick={handlesubmit}
              className="text-2xl text-white focus:outline-none ml-2 md:ml-3"
            >
              <Link to="/search">
                <IoSearchOutline />
              </Link>
            </button>
          </form>
          
          <div>
            <img
              className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden cursor-pointer active:scale-90 transition-transform duration-200"
              src={User_Icon}
              alt="UserIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
