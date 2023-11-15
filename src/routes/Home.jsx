import Banner from "../components/home/Banner";
import Careers from "../components/home/Careers";
import Footer from "../components/Footer";
import Articles from "../components/home/Articles";
import About from "../components/home/About";
import NavBar from "../components/shared/NavBar";

function Home() {
   return (
      <>
         <NavBar />
         <Banner />
         <main>
            <Careers />
            <About />
            <Articles />
         </main>
         <Footer />
      </>
   );
}
export default Home;
