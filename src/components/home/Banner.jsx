function Banner() {
   return (
      <header className="px-4 py-40">
         <div className="sm:w-[85%] xl:w-[60%] mx-auto">
            <h1 className="text-4xl md:text-[3.1rem] lg:text-[4.5rem] font-semibold text-center leading-[3rem] md:leading-[4rem] lg:leading-[5.5rem]">
               <span className="text-dark-blue">Every</span>
               <span className="text-blue mr-3">thing</span>
               you need to start a career in tech.
            </h1>
            <p className="text-center mt-3 mb-8 lg:mt-5 lg:mb-12 md:text-[1.2rem]">
               The ultimate guide to start a{" "}
               <span className="text-blue">career in tech</span>
            </p>
            <div className="flex justify-center items-center">
               <a
                  href="#careers"
                  className="bg-blue text-white px-14 py-3 flex rounded text-sm"
               >
                  Get Started
               </a>
            </div>
         </div>
      </header>
   );
}

export default Banner;
