import { Link } from "react-router-dom";
import SiteLogo from "./shared/SiteLogo";
import contributors from "../data/contributors";

function Footer() {
   return (
      <footer className="bg-gray-100 text-dark pt-10 px-4 ">
         <div className="max-w-[1400px] mx-auto">
            <SiteLogo />
            <div className="lg:flex items-start lg:gap-x-10 xl:gap-x-36 lg:mt-10">
               <div className="my-12 lg:my-0 md:w-[80%] lg:w-[30%]">
                  <p className="my-4 lg:mt-0">
                     The
                     <a
                        href="https://github.com/toriola998/tech-career"
                        className="font-semibold mx-1"
                     >
                        version 1
                     </a>
                     was an open source project.The content of this project
                     wouldn't have been possible without these people.
                  </p>
                  <div className="flex flex-wrap gap-x-3 mt-5">
                     {contributors.map((item, index) => (
                        <a
                           key={index}
                           href={item.link}
                           className="flex-center rounded-full w-10 h-10 text-white"
                           style={{ backgroundColor: item.bgColor }}
                        >
                           {item.name}
                        </a>
                     ))}
                  </div>
               </div>

               <div className="md:flex gap-x-20 mb-3 xl:gap-x-36">
                  <div className="flex flex-col gap-y-3 mb-3">
                     <Link to="/career/frontend-development">
                        Frontend development
                     </Link>
                     <Link to="/career/backend-development">
                        Backend development
                     </Link>
                     <Link to="/career/mobile-development">
                        Mobile development
                     </Link>
                     <Link to="/career/user-design">UI/UX design</Link>
                     <Link to="/career/software-testing">Software testing</Link>
                  </div>
                  <div className="flex flex-col gap-y-3">
                     <Link to="/career/product-management">
                        Product Management
                     </Link>
                     <Link to="/career/development-operations">
                        Development Operations
                     </Link>
                     <Link to="/career/machine-learning">Machine Learning</Link>
                     <Link to="/career/database-administration">
                        Database Administration
                     </Link>
                     <Link to="/career/data-science">Data Science</Link>
                     <Link to="/career/cloud-computing">Cloud computing</Link>
                  </div>
                  <div>
                     <Link to="/#about" className="flex mb-3">
                        About
                     </Link>
                     <Link to="/#articles" className="flex">
                        Articles
                     </Link>
                  </div>
               </div>
            </div>

            <p className="text-center text-sm mt-20 py-7 border-t border-gray-400">
               Copyright <span>{new Date().getFullYear()}</span>
               <span className="mx-2">|</span>
               Curated by
               <a
                  href="https://toriola.xyz#contact"
                  className="text-blue underline ml-1 font-semibold"
                  target="_blank"
               >
                  Toriola Faidat
               </a>
            </p>
         </div>
      </footer>
   );
}

export default Footer;
