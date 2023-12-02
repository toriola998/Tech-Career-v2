import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
   const [showNav, setShowNav] = useState(false);

   return (
      <nav className="border-b fixed top-0 right-0 z-50 left-0 bg-white py-6">
         <div className="relative max-w-[1200px] mx-auto">
            <div className="flex justify-between px-4">
               <Link to="/" className="text-2xl">
                  TC
               </Link>

               <button
                  onClick={() => {
                     setShowNav(!showNav);
                  }}
                  className="lg:hidden"
               >
                  <img
                     src="/assets/icons/menu.png"
                     alt=""
                     height="25"
                     width="25"
                  />
               </button>
            </div>

            <div
               className={`bg-white md:bg-transparent
            ${
               showNav
                  ? "z-50 right-0 top-0 left-0 bottom-0 min-h-screen"
                  : "hidden"
            } lg:flex lg:items-center lg:h-0 lg:right-0 lg:bottom-4 absolute 
            `}
            >
               <button
                  className="lg:hidden"
                  onClick={() => {
                     setShowNav(!showNav);
                  }}
               >
                  <img
                     src="/assets/icons/close.png"
                     alt=""
                     height="20"
                     width="20"
                     className="absolute top-6 right-6"
                  />
               </button>
               <div className="flex justify-center items-center min-h-screen">
                  <ul className="flex flex-col gap-y-4 lg:gap-x-20 lg:flex-row">
                     <li className="hover:underline">
                        <a href="#careers">Careers</a>
                     </li>
                     <li className="hover:underline">
                        <a href="#articles">Articles</a>
                     </li>
                     <li className="hover:underline">
                        <a href="#about">About</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default NavBar;
