import Banner from "../components/home/Banner";
import Careers from "../components/home/Careers";
import Footer from "../components/Footer";
import Articles from "../components/home/Articles";
import About from "../components/home/About";

function Home() {
   return (
      <>
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
