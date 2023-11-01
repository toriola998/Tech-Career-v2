function Footer() {
   return (
      <footer class="bg-[#003566] text-white py-4">
         <p class="text-center text-sm">
            Copyright <span>{new Date().getFullYear()}</span>
            <span class="mx-2">|</span>
            Curated by
            <a
               href="https://toriola.xyz#contact"
               class="text-light-blue underline ml-1"
               target="_blank"
            >
               Toriola Faidat
            </a>
         </p>
      </footer>
   );
}

export default Footer;
