import "../styles/About.css";

import {
  FaDumbbell,
  FaHeartbeat,
  FaUsers,
  FaClock,
  FaAppleAlt,
  FaMedal,
} from "react-icons/fa";


const features = [
  {
    icon: FaDumbbell,
    title: "Expert Trainers",
    text: "Train with certified professionals who guide and motivate you every step of your fitness journey."
  },
  {
    icon: FaHeartbeat,
    title: "Latest Equipment",
    text: "Experience modern strength and cardio machines for safer, smarter and more effective workouts."
  },
  {
    icon: FaAppleAlt,
    title: "Personalized Programs",
    text: "Customized workout and nutrition plans designed around your individual fitness goals."
  },
  {
    icon: FaUsers,
    title: "Motivating Community",
    text: "Stay inspired with a positive environment surrounded by passionate fitness enthusiasts."
  },
  {
    icon: FaClock,
    title: "Flexible Timing",
    text: "Morning and evening training sessions that fit perfectly into your daily schedule."
  },
  {
    icon: FaMedal,
    title: "Healthy Lifestyle",
    text: "Build lasting habits that improve your strength, confidence and overall well-being."
  }
];



function About(){

return(

<section className="about" id="about">


<div className="about-container">



<header className="about-heading">

<div 
className="section-divider"
aria-hidden="true"
>
<span></span>
</div>


<div className="section-tag">
ABOUT US
</div>


</header>





<div className="about-top">


<div className="about-image">

<img

src="/images/about.png"

alt="Ultimate7 Fitness premium gym interior"

/>

</div>





<div className="about-content">


<div className="section-tag">
WHO WE ARE
</div>



<h2>

Redefining Fitness
<br/>
in Hyderabad

</h2>



<p className="about-description">

Ultimate7 Fitness is redefining the fitness culture of Hyderabad by
offering a modern premium gym experience. With advanced equipment,
certified trainers, and a supportive fitness community, we help people
of all fitness levels achieve their goals with confidence.

</p>




<a 
href="#services"
className="about-btn"
>

Explore More
<span>➜</span>

</a>



</div>


</div>







<section className="why-section">


<div className="section-tag center">

WHY CHOOSE ULTIMATE7 FITNESS

</div>



<h2 className="why-heading">

Built For Those Who
<br/>
<span>Refuse Average</span>

</h2>



<p className="why-description">

Everything you need to train at your peak — premium gear,
expert coaches and a space designed to push you forward.

</p>





<div className="features-grid">


{
features.map((item,index)=>{

const Icon=item.icon;


return(

<div 
className="feature-card"
key={index}
>


<Icon className="feature-icon"/>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</div>


)

})
}



</div>


</section>








<section className="mission-vision">


<div className="mission-box">

<h2>
Our Mission
</h2>


<p>

To inspire healthier lifestyles by providing a premium fitness
experience through expert coaching, advanced equipment, and a
motivating community where everyone can achieve lasting results.

</p>

</div>





<div className="vision-box">

<h2>
Our Vision
</h2>


<p>

To become Hyderabad's most trusted fitness destination,
empowering people of every fitness level to transform their lives
through health, strength, and confidence.

</p>

</div>


</section>







<div className="hours-box">


<div className="clock-icon">
🕒
</div>



<h3>
Opening Hours
</h3>



<p>

<strong>
Monday – Sunday
</strong>

<br/>

7:00 AM – 1:00 AM

</p>




<p className="closed-day">

<strong>
Friday
</strong>

<br/>

Closed

</p>



</div>





</div>


</section>


)


}


export default About;