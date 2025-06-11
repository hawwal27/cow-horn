
import Navbar from "../Pages/Navbar"
import Hero from "../Pages/Hero"
import Aboutus from "../Pages/Aboutus"
import ContactPage from "../Pages/ContactPage"
import Testimonial from "../Pages/Testimonial"
import Footer from "../Pages/Footer"
import Product from "../Product/ProductPage"
import FAQSection from "../Pages/FAQ"

const Home = () => {
  return (
        <>
      <div>

      <Navbar/>

      <Hero/>
      <div id="about">
      <Aboutus/>
      </div>

      <div id="contact">
        <ContactPage/>
      </div>

        <div id="faq">
        <FAQSection/>
      </div>
      
      <div id="testimonial">
        <Testimonial/>
      </div>


      <div id='footer'>
        <Footer />
        </div>


    </div>
    </>
  )
}

export default Home
