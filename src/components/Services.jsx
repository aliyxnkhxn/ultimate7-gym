import "../styles/Services.css";

import {
  FaDumbbell,
  FaFire,
  FaAppleAlt,
  FaUsers,
  FaRunning,
  FaUserTie,
} from "react-icons/fa";


const services = [
  {
    icon: FaUserTie,
    title: "Personal Training",
    text: "One-on-one coaching designed to maximize your strength, confidence, and overall fitness results."
  },
  {
    icon: FaDumbbell,
    title: "Strength Training",
    text: "Build muscle, increase endurance, and train with world-class equipment in a premium environment."
  },
  {
    icon: FaFire,
    title: "Fat Loss Programs",
    text: "Customized workout plans focused on sustainable fat loss and a healthier lifestyle."
  },
  {
    icon: FaAppleAlt,
    title: "Nutrition Guidance",
    text: "Personalized nutrition advice to support your workouts and help you achieve faster results."
  },
  {
    icon: FaRunning,
    title: "Functional Fitness",
    text: "Improve flexibility, mobility, balance, and overall athletic performance through functional training."
  },
  {
    icon: FaUsers,
    title: "Group Classes",
    text: "Stay motivated by training alongside an energetic and supportive fitness community."
  }
];


function Services(){


return(

<section 
className="services"
id="services"
>


<div className="section-divider">
<span></span>
</div>



<header className="services-header">


<div className="section-tag">

OUR SERVICES

</div>



<h2 className="services-heading">

Why <span>Ultimate7</span> Stands Above the Rest

</h2>



<p className="services-description">

Experience premium fitness with expert coaching, advanced equipment,
personalized training, and a motivating environment designed to help
you become stronger every day.

</p>


</header>





<div className="service-container">


{
services.map((service,index)=>{


const Icon = service.icon;


return(

<div 
className="service-card"
key={index}
>


<Icon 
className="service-icon"
/>



<h3>

{service.title}

</h3>



<p>

{service.text}

</p>



</div>


)


})

}


</div>





<div className="services-cta">


<h2>

Everything You Need to Reach Your <span>Fitness Goals</span>

</h2>



<p>

From state-of-the-art equipment and certified personal trainers to
customized workout plans and expert nutrition guidance, Ultimate7 Fitness
provides everything you need to train smarter, perform better, and
achieve lasting results.

</p>




<a 
href="#membership"
className="service-btn"
>

View Membership Plans

</a>



</div>



</section>

)


}


export default Services;