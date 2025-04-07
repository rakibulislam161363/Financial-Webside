import DebitCard from "./component/debitCard";
import FAQSection from "./component/FAQs";
import FindCard from "./component/findCard";
import Future from "./component/future";
import Hero from "./component/hero";
import Navbar from "./component/navbar"
import Offer from "./component/offer";
import Rating from "./component/rating";


function App() {
  

  return (
    <div className="bg-[#1A1E1C]">
      <div className="xl:w-[1440px] lg:mx-[100px] md:mx-[50px] mx-[25px]">
        <Navbar />
        <Hero />
        <Future />
        <Offer />
        <DebitCard />
        <FindCard />
        <Rating />
        <FAQSection />
        
      </div>
    </div>
  );
}

export default App
