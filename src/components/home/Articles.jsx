import { Link } from "react-router-dom";
import articles from "../../data/articles";

function Articles() {
   return (
      <section className="py-16 bg-gray-50 px-4">
         <h2 className="text-2xl md:text-[2rem] font-medium text-center underline">
            Related articles
         </h2>

         <div className="py-6 flex flex-col gap-7 md:grid grid-cols-2 lg:px-[10%] xl:px-0 xl:grid-cols-3 max-w-[1100px] mx-auto justify-center">
            {articles.map((item, index) => (
               <article
                  className="p-4 bg-white rounded-lg relative"
                  key={index}
               >
                  <img
                     src={item.image}
                     alt=""
                     role="presentation"
                     className="rounded-lg h-[200px] w-full object-cover"
                  />
                  <h3 className="font-medium my-4 text-[1.1rem] lg:text-[1.2rem]">
                     {item.title}
                  </h3>
                  <p className="text-sm lg:text-[15px] leading-6 mb-20">
                     {item.note.slice(0, 150) + "..."}
                  </p>

                  <div className="absolute bottom-4">
                     <Link
                        className="inline-flex text-white text-xs lg:text-[13px] bg-blue rounded-full px-4 py-2"
                        to={item.link}
                        target="_blank"
                     >
                        Read more
                     </Link>
                  </div>
               </article>
            ))}
         </div>
      </section>
   );
}

export default Articles;
