import SiteLogo from "./shared/SiteLogo";

function Footer() {
   return (
      <footer className="bg-[#003566] text-white py-4">
         <SiteLogo />
         <p>The content of this project wouldn't have been possible without these people <a href=""></a> </p>

         <p className="text-center text-sm">
            Copyright <span>{new Date().getFullYear()}</span>
            <span className="mx-2">|</span>
            Curated by
            <a
               href="https://toriola.xyz#contact"
               className="text-light-blue underline ml-1"
               target="_blank"
            >
               Toriola Faidat
            </a>
         </p>
      </footer>
   );
}

export default Footer;
