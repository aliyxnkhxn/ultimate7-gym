import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-divider">
        <span></span>
      </div>


      {/* Header */}

      <div className="contact-header">

        <div className="section-tag">
          CONTACT US
        </div>

        <h2>
          Let's Build Your <br />
          <span>Strongest Version</span>
        </h2>

        <p>
          Whether you're ready to join, have questions about memberships,
          or simply want to visit Ultimate7 Fitness, we're here to help
          you start your fitness journey.
        </p>

      </div>


      <div className="contact-container">


        {/* LEFT COLUMN */}

        <div className="left-column">


          <div className="contact-info">

            <h3>
              Get In Touch
            </h3>

            <p>
              Start your fitness journey today with Hyderabad's premium
              fitness center. Our team is ready to guide you every step
              of the way.
            </p>


            <div className="info-box">

              <span>📍</span>

              <div>

                <h4>
                  Location
                </h4>

                <a
                  href="https://maps.app.goo.gl/sxpdbNSHTCF3SHGJ6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ultimate7 Fitness Center, Hyderabad, Sindh
                </a>

              </div>

            </div>


            <div className="info-box">

              <span>📞</span>

              <div>

                <h4>
                  Phone
                </h4>

                <a href="tel:+923173244455">
                  0317-3244455
                </a>

              </div>

            </div>


            <div className="info-box">

              <span>✉️</span>

              <div>

                <h4>
                  Email
                </h4>

                <a href="mailto:ultimate7fitnesscenter@hotmail.com">
                  ultimate7fitnesscenter@hotmail.com
                </a>

              </div>

            </div>


            <div className="info-box">

              <span>💬</span>

              <div>

                <h4>
                  WhatsApp
                </h4>

                <a
                  href="https://wa.me/923173244455"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat With Us
                </a>

              </div>

            </div>


          </div>



          {/* MAP */}

          <div className="map-box">

            <iframe
              title="Ultimate7 Fitness Location"
              src="https://www.google.com/maps?q=Hyderabad,Sindh&output=embed"
              loading="lazy"
              allowFullScreen
            />

          </div>



          <a
            href="https://maps.app.goo.gl/sxpdbNSHTCF3SHGJ6"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            📍 Get Directions
          </a>


        </div>




        {/* FORM */}

        <form className="contact-form">


          <h3>
            Membership Request
          </h3>


          <p className="form-text">
            Fill out the form below and our team will contact you shortly
            to confirm your membership.
          </p>



          <input
            type="text"
            placeholder="Full Name"
          />


          <input
            type="email"
            placeholder="Email Address"
          />


          <input
            type="tel"
            placeholder="Phone Number"
          />



          <select defaultValue="">

            <option value="" disabled>
              Choose Plan
            </option>

            <option value="Basic Membership">
              Basic Membership
            </option>

            <option value="Standard Membership">
              Standard Membership
            </option>

            <option value="Premium Membership">
              Elite Membership
            </option>

          </select>



          <textarea
            rows="5"
            placeholder="Message (Optional)"
          />



          <button type="submit">
            Submit Membership Request
          </button>


        </form>


      </div>

    </section>
  );
}

export default Contact;