import { Link } from "react-router-dom";
import articles from "../../data/articles";

function Articles() {
   return (
      <section class="py-16 bg-gray-50 px-4">
         <h2 class="text-2xl md:text-[2rem] font-medium text-center underline">
            Related articles
         </h2>

         <div class="py-6 flex flex-col gap-7 md:grid grid-cols-2 lg:px-[10%] xl:px-0 xl:grid-cols-3 max-w-[1100px] mx-auto justify-center">
            {articles.map((item, index) => (
               <article
                  class="p-4 bg-white rounded-lg"
                  v-for="(item, index) in articles"
                  key={index}
               >
                  <img
                     src="/assets/images/yellow-cloth-girl.jpg"
                     alt=""
                     role="presentation"
                     class="rounded-lg"
                  />
                  <h3 class="font-medium my-4 text-[1.1rem] lg:text-[1.2rem]">
                     {item.title}
                  </h3>
                  <p class="text-sm lg:text-[15px] leading-6">{item.note}</p>

                  <Link class="inline-flex mt-6 text-white text-xs lg:text-[13px] bg-blue rounded-full px-3 py-2">
                     Read more
                  </Link>
               </article>
            ))}
         </div>
      </section>
   );
}

export default Articles;
