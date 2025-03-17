import React, { useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../resources.min.css"; // Import the separate CSS file

const slides = [
  {
    title: "Report 1",
    description: "This is the description for Report 1.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Report 2",
    description: "This is the description for Report 2.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Report 3",
    description: "This is the description for Report 3.",
    image: "https://via.placeholder.com/400x250",
  },
];

// Custom Next Arrow: positioned at the right edge of the current slide.
function NextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="arrow next-arrow">
      <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
        <path d="M10 6l6 6-6 6" />
      </svg>
    </div>
  );
}

// Custom Prev Arrow: positioned at the left edge of the current slide.
function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="arrow prev-arrow">
      <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
        <path d="M14 6l-6 6 6 6" />
      </svg>
    </div>
  );
}

const ResourceReports: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isLastSlide = currentSlide === slides.length - 1;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    // If the active slide is the last, show only one slide
    slidesToShow: isLastSlide ? 1 : 1.3,
    slidesToScroll: 1,
    centerMode: isLastSlide ? false : true,
    centerPadding: isLastSlide ? "0px" : "100px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // On mobile: only one slide visible
          centerMode: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="resource-reports-container">
      <h1 className="title">Reports</h1>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-item">
              <div className="slide-content">
                {/* Image Section */}
                <div className="slide-image">
                  <div className="image-container">
                    <img src={slide.image} alt={slide.title} className="image" />
                  </div>
                </div>
                {/* Text Section */}
                <div className="slide-text">
                  <div className="text-section">
                    <h2 className="slide-title">{slide.title}</h2>
                    <p className="slide-description">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResourceReports;
