import { useEffect, useState } from "react";
import logo from "../assets/swiggy-logo.png";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <img className=" h-14 p-2 m-3 " alt="logo" src={logo} />
  </Link>
);

function Header() {
  const [isLogin, setIsLogin] = useState('false');

  useEffect( ()=> {

  }, [isLogin]);

  return (
    <header className="flex justify-around pt-2 bg-zinc-100 px-12">
      <div>
        <Title />
      </div>

      <div className=" font-serif font-bold text-gray-600 text-xl ">
        <ul className=" py-8 ">
          <Link to="/"><li className=" hover:text-orange-400 px-4 fa fa-home "> Home </li></Link>
          <Link to="/about"><li className=" hover:text-orange-400 px-4 fa fa-user "> About</li></Link>
          <Link to="/contact"><li className=" hover:text-orange-400 px-4 fa fa-phone"> Contact</li></Link>
        </ul>
      </div>
      <Link to="/cart" className="  text-2xl text-center cursor-pointer my-4 py-3">
        <i className=" fa fa-shopping-cart hover:text-orange-400" > cart</i>
        {/* <span> cart</span> */}
      </Link>
      <Link className=" text-2xl ">
        <i className=" my-4 py-4  fa fa-user-circle-o hover:text-orange-400"> Login</i>
        {/* <span className="">Login</span> */}
      </Link>
    </header>
  );
};

export default Header;
