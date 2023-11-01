function Banner() {
   return (
      <header class="px-4 py-40">
         <div class="sm:w-[85%] xl:w-[60%] mx-auto">
            <h1 class="text-4xl md:text-[3.1rem] lg:text-[4.5rem] font-semibold text-center leading-[3rem] md:leading-[4rem] lg:leading-[5.5rem]">
               <span class="text-dark-blue">Every</span>
               <span class="text-blue mr-3">thing</span>
               you need to start a career in tech.
            </h1>
            <p class="text-center mt-3 mb-8 lg:mt-5 lg:mb-12 md:text-[1.2rem]">
               The ultimate guide to start a{" "}
               <span class="text-blue">career in tech</span>
            </p>
            <div class="flex justify-center items-center">
               <a
                  href="#careers"
                  class="bg-blue text-white px-14 py-3 flex rounded text-sm"
               >
                  Get Started
               </a>
            </div>
         </div>
      </header>
   );
}

export default Banner;
