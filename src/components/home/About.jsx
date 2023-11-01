import about from "../../data/about";

function About() {
   return (
      <>
         {about.map((item, index) => (
            <section
               class="py-16 px-4 md:px-[15%] lg:px-4 flex flex-col gap-10 xl:gap-20 lg:flex-row container lg:justify-center items-center"
               v-for="(item, index) in story"
               key={index}
               // class={ 'lg:flex-row-reverse': index == 1 }
            >
               <div class="lg:w-[40%]">
                  <h2 class="text-2xl md:text-[2.3rem] md:leading-[3rem] font-semibold">
                     {item.title}
                  </h2>
                  <p class="pt-4 pb-8 text-[.9rem] md:text-[1rem] leading-[1.6rem]">
                     {item.note}
                  </p>
                  <a href="#careers" class="blue-btn-link">
                     Get Started
                  </a>
               </div>
               <img
                  src={item.image}
                  alt=""
                  class="lg:w-[50%] lg:object-cover lg:h-[550px]"
               />
            </section>
         ))}
      </>
   );
}

export default About;
