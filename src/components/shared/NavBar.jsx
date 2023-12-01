import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
   const [showNav, setShowNav] = useState(false);

   return (
      <nav className="border-b fixed top-0 right-0 z-50 left-0 bg-white py-4">
         <div className="flex justify-between px-4 max-w-[1200px] mx-auto">
            <Link to="/" className="text-2xl">
               TC
            </Link>

            <button
               onClick={() => {
                  setShowNav(true);
               }}
            >
               <img
                  src="/assets/icons/menu.png"
                  alt=""
                  height="25"
                  width="25"
               />
            </button>
         </div>

         {showNav && (
            <div className="bg-white md:bg-transparent absolute z-50 right-0 top-0 left-0 bottom-0 min-h-screen">
               <button
                  onClick={() => {
                     setShowNav(false);
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
                  <ul className="flex flex-col gap-y-4 lg:flex-row">
                     <li>Careers</li>
                     <li>Articles</li>
                     <li>About</li>
                  </ul>
               </div>
            </div>
         )}
      </nav>
   );
}

export default NavBar;
