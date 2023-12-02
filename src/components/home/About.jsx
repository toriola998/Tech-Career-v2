import about from "../../data/about";

function About() {
   return (
      <>
         {about.map((item, index) => (
            <section
               id="about"
               className={`scroll-mt-20 py-16 px-4 md:px-[15%] lg:px-4 flex flex-col gap-10 xl:gap-x-40 lg:flex-row container lg:justify-center items-center ${
                  index === 1 ? "lg:flex-row-reverse" : ""
               }`}
               key={index}
            >
               <div className="lg:w-[40%]">
                  <h2 className="text-2xl md:text-[2.3rem] md:leading-[3rem] font-semibold">
                     {item.title}
                  </h2>
                  <p className="pt-4 pb-8 text-[.9rem] md:text-[1rem] leading-[1.6rem]">
                     {item.note}
                  </p>
                  <a href="#careers" className="blue-btn-link">
                     Get Started
                  </a>
               </div>
               <img
                  src={item.image}
                  alt=""
                  className="lg:w-[50%] lg:object-cover lg:h-[550px]"
               />
            </section>
         ))}
      </>
   );
}

export default About;
