function Careers() {

    
   return (
      <section className="py-16 bg-gray-50 px-4" id="careers">
         <h2 className="text-3xl md:text-[2.5rem] font-medium text-center underline">
            Careers in tech
         </h2>
         <div className="py-8 lg:pt-16 flex flex-col gap-5 xl:gap-10 md:flex-row md:flex-wrap container">
            {/* <div className="career py-8 px-4 md:w-[48.5%]" v-for="(career, index) in careers" :key="index">
        <img
          src="@/assets/icon-mobile.png"
          alt=""
          role="presentation"
          className="mx-auto block"
          height="70"
          width="70"
        />
        <h3 className="font-medium my-4 text-center text-[1.4rem] lg:text-[1.6rem]">
          {{ career.title }}
        </h3>
        <p className="text-[15px] lg:text-[1rem] text-center leading-[1.7] sm:px-5 md:px-0 xl:px-10">
          {{ career.description.slice(0, 250) + '...' }}
        </p>

        <button className="block mx-auto mt-10 blue-btn-link">Learn more</button>
      </div> */}
         </div>
      </section>
   );
}

export default Careers;
