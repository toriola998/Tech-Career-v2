import NavBar from "../shared/NavBar";

function CommonPageLayout({ children, title, heroImg }) {
   return (
      <>
         <NavBar />
         <main>
            <div className="max-w-[700px] mx-auto my-32 px-4">
               <h1 className="text-dark font-semibold text-2xl md:text-3xl">
                  {title}
               </h1>
               <img
                  src={heroImg}
                  alt=""
                  role="presentation"
                  className="h-[200px] md:h-[300px] w-full object-cover my-10"
               />
               {children}
            </div>
         </main>
      </>
   );
}

export default CommonPageLayout;
