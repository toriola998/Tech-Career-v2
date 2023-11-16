import NavBar from "../shared/NavBar";

function CommonPageLayout({ children }) {
   return (
      <>
         <NavBar />
         <main>{children}</main>
      </>
   );
}

export default CommonPageLayout;
