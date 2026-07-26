import "../styles/Membership.css";

function Membership() {

  const plans = [
    {
      title: "Basic",
      price: "3,500",
      badge: "",
      features: [
        "Unlimited Gym Access",
        "Cardio Zone",
        "Locker Facility",
        "Free Wi-Fi",
        "Community Support"
      ]
    },

    {
      title: "Premium",
      price: "5,000",
      badge: "MOST POPULAR",
      features: [
        "Everything in Basic",
        "Personal Trainer",
        "Customized Workout Plan",
        "Nutrition Guidance",
        "Priority Support"
      ]
    },

    {
      title: "Elite",
      price: "7,500",
      badge: "",
      features: [
        "Everything in Premium",
        "24/7 Gym Access",
        "Private Coaching",
        "VIP Locker",
        "Exclusive Member Benefits"
      ]
    }
  ];


  return (

    <section 
      id="membership" 
      className="membership"
    >

      <div className="section-divider">
        <span></span>
      </div>


      <div className="membership-header">

        <p className="section-tag">
          MEMBERSHIP
        </p>


        <h2>
          Choose the Perfect
          <br />
          <span>Membership</span>
        </h2>


        <p className="membership-subtitle">
          Flexible membership plans designed for beginners,
          fitness enthusiasts, and serious athletes.
          Start your transformation today.
        </p>

      </div>



      <div className="plans-container">

        {plans.map((plan, index) => (

          <div
            className={`plan-card ${index === 1 ? "active" : ""}`}
            key={index}
          >

            {plan.badge && (
              <div className="popular-badge">
                {plan.badge}
              </div>
            )}


            <h3>
              {plan.title}
            </h3>


            <h4>
              <small>PKR</small>
              {plan.price}
              <span>/month</span>
            </h4>



            <ul>

              {plan.features.map((item, i) => (

                <li key={i}>
                  ✓ {item}
                </li>

              ))}

            </ul>



            <button>
              Choose Plan
            </button>


          </div>

        ))}

      </div>


    </section>

  );

}

export default Membership;