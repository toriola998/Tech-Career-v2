import careers from "../../data/careers";
import { Link } from "react-router-dom";

function Careers() {
   return (
      <section className="py-16 bg-gray-50 px-4" id="careers">
         <h2 className="text-3xl md:text-[2.5rem] font-medium text-center underline">
            Careers in tech
         </h2>
         <div className="py-8 lg:pt-16 flex flex-col gap-5 xl:gap-10 md:flex-row md:flex-wrap justify-center container">
            {careers.map((item, index) => (
               <div className="career py-8 px-4 md:w-[48.5%] lg:w-[45.8%]" key={index}>
                  <img
                     src={ `public/assets/icons/career/${item.icon}`}
                     alt=""
                     role="presentation"
                     className="mx-auto block"
                     height="70"
                     width="70"
                  />
                  <h3 className="font-medium mt-8 mb-4 text-center text-[1.4rem] lg:text-[2rem]">
                     {item.title}
                  </h3>
                  <p className="text-[15px] lg:text-[1rem] text-center leading-[1.7] sm:px-5 md:px-0 xl:px-10">
                     {item.description.slice(0, 250) + "..."}
                  </p>

                  <div className="flex-center">
                     <Link
                        className="mt-10 blue-btn-link hover:opacity-75"
                        to={`/career/${item.link}`}
                     >
                        Learn more
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}

export default Careers;
