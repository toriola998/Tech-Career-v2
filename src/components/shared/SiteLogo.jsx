import { Link } from "react-router-dom";
function SiteLogo() {
   return (
      <Link to="/" className="flex items-center gap-x-2">
         <span className="flex-center bg-blue rounded p-1 h-10 w-10">
            <img src="/assets/icons/logo3.png" height="35" width="35" />
         </span>
         <span className="text-xl font-semibold md:text-2xl">techCareers</span>
      </Link>
   );
}

export default SiteLogo;
