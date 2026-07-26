import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  useEffect(() => {

    AOS.init({
      duration:1000,
      once:true,
      easing:"ease-in-out",
      offset:100,
    });

  }, []);


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Membership />
      <Trainers />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );

}


export default App;