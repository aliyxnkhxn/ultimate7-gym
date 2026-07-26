import "../styles/Trainers.css";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

function Trainers() {

  const trainers = [
    {
      name: "Alex Johnson",
      role: "Head Strength Coach",
      experience: "8+ Years",
      specialty: "Strength & Conditioning",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "David Smith",
      role: "Bodybuilding Coach",
      experience: "10+ Years",
      specialty: "Muscle Building",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Michael Lee",
      role: "Fitness Coach",
      experience: "6+ Years",
      specialty: "Weight Loss Expert",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="trainers" id="trainers">

      <div className="section-divider">
        <span></span>
      </div>


      {/* Header */}

      <div className="trainers-header">

        <p className="section-tag">
          TRAINERS
        </p>

        <h2>
          Meet Our Expert <span>Coaches</span>
        </h2>

        <p className="trainers-description">
          Our certified fitness professionals are committed to helping you
          build strength, improve performance, and achieve lasting results.
          With expert guidance, personalized coaching, and constant motivation,
          they will support you through every step of your fitness journey.
        </p>

      </div>


      {/* Trainer Cards */}

      <div className="trainer-container">

        {trainers.map((trainer) => (

          <div 
            className="trainer-card"
            key={trainer.name}
          >

            <div
              className="trainer-image"
              style={{
                backgroundImage: `url(${trainer.image})`,
              }}
            >

              <div className="image-badge">

                <span className="badge-title">
                  ELITE COACH
                </span>

                <span className="badge-experience">
                  {trainer.experience}
                </span>

              </div>

            </div>


            <div className="trainer-info">

              <h3>
                {trainer.name}
              </h3>


              <p className="trainer-role">
                {trainer.role}
              </p>


              <div className="speciality">
                {trainer.specialty}
              </div>


              <div className="social-icons">

                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>

                <a href="#" aria-label="Facebook">
                  <FaFacebookF />
                </a>

                <a href="#" aria-label="Whatsapp">
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Trainers;