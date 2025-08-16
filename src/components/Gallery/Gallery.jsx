import { useState, useEffect } from 'react';
import './Gallery.css';
import gallery1 from '../../images/gallery1.jpg';
import gallery2 from '../../images/gallery2.jpg';
import gallery3 from '../../images/gallery3.jpg';
import gallery4 from '../../images/gallery4.jpg';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  // Gallery images data
  const images = [
    {
      src: gallery1,
      alt: "Campus Life",
      title: "Campus Life",
      description: "Students enjoying vibrant campus activities and academic excellence"
    },
    {
      src: gallery2,
      alt: "Campus Life",
      title: "Campus Life",
      description: "Students enjoying vibrant campus activities and academic excellence"
    },
    {
      src: gallery3,  
      alt: "Research Lab",
      title: "Research Excellence",
      description: "State-of-the-art laboratories fostering innovation and discovery"
    },
    {
      src: gallery4,
      alt: "Graduation",
      title: "Achievement",
      description: "Celebrating success and academic milestones together"
    }
  ];

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => (prev + direction + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        changeSlide(-1);
      } else if (e.key === 'ArrowRight') {
        changeSlide(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2>Photo Gallery</h2>
        
        <div className="gallery-container">
          <button className="gallery-nav prev" onClick={() => changeSlide(-1)}>
            ‹
          </button>
          <button className="gallery-nav next" onClick={() => changeSlide(1)}>
            ›
          </button>
          
          <div 
            className="gallery-slider" 
            style={{ 
              transform: `translateX(-${currentSlide * 20}%)`,
              animation: 'autoRotate 15s infinite',
              animationDelay: `-${currentSlide * 3}s`
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="gallery-image">
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;