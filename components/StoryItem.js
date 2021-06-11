import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { traineeData } from "../lib/trainee";
import React from "react";
import ReactSlider from "react-slick";

function StoryItem() {
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    infinite: true,
    slidesToShow: 6,
    arrows: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 4000,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "-40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          centerPadding: "-6px",
          slidesToShow: 6,
        },
      },
    ],
  };
  return (
    <div>
      <h1 className="mb-3 font-bold">Story</h1>
      <ReactSlider {...settings}>
        {traineeData.map((trainee) => (
          <div className="flex flex-col justify-start">
            <div className="rounded-full w-32 h-32  flex items-center justify-center border-blue-900 border-2">
              <img
                src={trainee.photo}
                alt={trainee.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>

            <p>{trainee.name.substring(0, 10)} ...</p>
          </div>
        ))}
      </ReactSlider>

      <style jsx>
        {`
          .slide {
            width: 200px;
            height: 100px;
          }
        `}
      </style>
    </div>
  );
}

export default StoryItem;
