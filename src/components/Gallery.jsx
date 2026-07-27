import { useState } from "react";
import "../styles/Gallery.css";


const gallery = [
  {
    image: "/images/gallery1.jpg",
    title: "Strength Zone",
    category: "Weight Training",
  },
  {
    image: "/images/gallery2.jpg",
    title: "Cardio Arena",
    category: "Endurance",
  },
  {
    image: "/images/gallery3.jpg",
    title: "Boxing Studio",
    category: "Combat Fitness",
  },
  {
    image: "/images/gallery4.jpg",
    title: "Premium Equipment",
    category: "Modern Machines",
  },
  {
    image: "/images/gallery5.jpg",
    title: "Functional Area",
    category: "Mobility",
  },
  {
    image: "/images/gallery6.jpg",
    title: "Ultimate7 Family",
    category: "Community",
  },
];


function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const openImage = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };


  const previousImage = () => {

    const prev =
      currentIndex === 0
        ? gallery.length - 1
        : currentIndex - 1;

    setCurrentIndex(prev);
    setSelectedImage(gallery[prev]);

  };


  const nextImage = () => {

    const next =
      currentIndex === gallery.length - 1
        ? 0
        : currentIndex + 1;

    setCurrentIndex(next);
    setSelectedImage(gallery[next]);

  };


  return (

    <section 
      className="gallery" 
      id="gallery"
    >

      <div className="section-divider">
        <span></span>
      </div>



      <div className="gallery-header">

        <p className="section-tag">
          GALLERY
        </p>


        <h2>
          Inside <span>Ultimate7</span> Fitness
        </h2>


        <p>
          Discover our premium training environment,
          cutting-edge equipment, and the energy that
          motivates every workout.
        </p>

      </div>




      <div className="gallery-grid">

        {gallery.map((item, index) => (

          <div
            key={index}
            className={`gallery-card card-${index + 1}`}
            onClick={() => openImage(item, index)}
          >

            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
            />



            <div className="gallery-overlay">

              <div className="overlay-content">

                <span className="gallery-category">
                  {item.category}
                </span>


                <h3>
                  {item.title}
                </h3>


                <button className="gallery-btn">
                  View Image →
                </button>


              </div>

            </div>


          </div>

        ))}

      </div>





      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >


          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >


            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>



            <button
              className="nav-btn prev-btn"
              onClick={previousImage}
            >
              ❮
            </button>



            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />



            <button
              className="nav-btn next-btn"
              onClick={nextImage}
            >
              ❯
            </button>



            <h2>
              {selectedImage.title}
            </h2>


            <p>
              {selectedImage.category}
            </p>


          </div>


        </div>

      )}


    </section>

  );

}


export default Gallery;