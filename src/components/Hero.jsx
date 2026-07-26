import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "../styles/Hero.css";
import heroVideo from "../assets/videos/hero.mp4";


const stats = [
  {
    value: "500+",
    label: "Active Members",
  },
  {
    value: "25+",
    label: "Workout Programs",
  },
  {
    value: "5+",
    label: "Expert Trainers",
  },
  {
    value: "99%",
    label: "Satisfaction",
  },
];


function Hero() {

  const [showIntro, setShowIntro] = useState(true);


  useEffect(() => {

    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 2200);


    return () => clearTimeout(introTimer);

  }, []);



  return (

    <section className="hero" id="home">


      {/* Brand Intro */}
      <AnimatePresence>
        {showIntro && (

          <motion.div
            className="intro-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
          >

            <h1>
             ULTIMATE<span>7</span>
            </h1>

            <p>
            FITNESS CENTER
            </p>

          </motion.div>

        )}
      </AnimatePresence>



      {/* Background Video */}
      <motion.video

        className="hero-video"

        autoPlay
        muted
        loop
        playsInline

        preload="metadata"

        aria-hidden="true"

        initial={{
          scale:1.08
        }}

        animate={{
          scale:1
        }}

        transition={{
          duration:2.5,
          ease:"easeOut"
        }}

      >

        <source 
          src={heroVideo}
          type="video/mp4"
        />

      </motion.video>



      {/* Dark Overlay */}
      <div className="hero-overlay" />




      {/* Main Content */}

      <motion.div

      className="hero-content"

       initial={{
       opacity:0,
       y:30,
       scale:.98
       }}

       animate={{
       opacity: showIntro ? 0 : 1,
       y: showIntro ? 30 : 0,
       scale: showIntro ? .98 : 1
       }}

       transition={{
       duration:.8,
       ease:"easeOut"
       }}

>


        <div className="hero-badge">

          🔥 HYDERABAD'S #1 PREMIUM FITNESS CENTER

        </div>



        <h1>

          UNLOCK YOUR

          <br />

          <span>
            STRONGEST SELF
          </span>

        </h1>



        <p className="hero-text">

          Push beyond your limits with world-class equipment,
          certified trainers, and an inspiring community that
          keeps you motivated every single day.

        </p>




        <motion.div

          className="hero-buttons"

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:2.5,
            duration:.7
          }}

        >

          <a 
            href="#membership"
            className="explore-btn"
          >

            Join Now
            <span>➜</span>

          </a>



          <a

            href="#gallery"

            className="explore-btn secondary-btn"

          >

            Explore Gym
            <span>➜</span>

          </a>


        </motion.div>




        {/* Stats */}

        <div className="hero-stats">

          {stats.map((item,index)=>(

            <motion.div

              className="stat-card"

              key={index}

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:2.7 + index * .15
              }}

            >

              <h3>
                {item.value}
              </h3>

              <p>
                {item.label}
              </p>


            </motion.div>

          ))}


        </div>




        {/* Scroll Indicator */}

        <a

          href="#about"

          className="scroll-arrow"

          aria-label="Scroll to about section"

        >

          ↓

        </a>



      </motion.div>


    </section>

  );

}


export default Hero;