function Banner() {
   return (
      <>
         <header className="px-4 header relative">
            <div className="sm:w-[85%] xl:w-[60%] mx-auto z-20">
               <h1 className="text-white text-4xl md:text-[3.1rem] xl:text-[3.5rem] font-semibold text-center leading-[3rem] md:leading-[4rem]">
                  Start your career in tech!
               </h1>
               <p className="text-white text-center mt-3 mb-8 lg:mt-5 lg:mb-10 md:text-[1.1rem] sm:max-w-[65%] mx-auto">
                  Everything you need to start a career in tech. Create your own
                  path and drive on your skills to achieve what you seek.
               </p>
               <div className="flex justify-center items-center">
                  <a href="#careers" className="px-8 py-3 flex blue-btn-link">
                     Get Started
                  </a>
               </div>
            </div>
            <div className="overlay absolute" />
         </header>
      </>
   );
}

export default Banner;
