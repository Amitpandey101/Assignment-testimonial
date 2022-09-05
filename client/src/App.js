 
import Banner1 from './Components/Banner/Banner1';
import Banner2 from './Components/Banner/Banner2';
import Footer from './Components/Footer/Footer';
import Navbar from "./Components/Navbar/Navbar"
import Pricing from './Components/Pricing/Pricing';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Test from './Components/test';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <>
      <Navbar/>
      <Services/>
      <Pricing/>
      <Banner1/>
      <Testimonials/>
      <Test/>
      <Banner2/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
