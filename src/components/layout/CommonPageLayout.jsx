import { ScrollRestoration } from "react-router-dom";
import SiteLogo from "../shared/SiteLogo";
import Footer from "../Footer";

function CommonPageLayout({ children, title, heroImg }) {
   return (
      <>
         <ScrollRestoration />
         <nav className="border-b fixed top-0 right-0 z-50 left-0 bg-white py-6">
            <div className="relative max-w-[1400px] mx-auto px-4">
               <SiteLogo />
            </div>
         </nav>
         <div className="max-w-[700px] mx-auto my-32 px-4">
            <header>
               <h1 className="text-dark font-semibold text-2xl md:text-3xl">
                  {title}
               </h1>
               <img
                  src={heroImg}
                  alt=""
                  role="presentation"
                  className="h-[200px] md:h-[300px] w-full object-cover my-10"
               />
            </header>
            <main>
               <div>{children}</div>
            </main>
         </div>
         <Footer />
      </>
   );
}

export default CommonPageLayout;
