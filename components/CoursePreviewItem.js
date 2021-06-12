import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { classData } from "../lib/class";
import React from "react";
import ReactSlider from "react-slick";
import { UserGroupIcon, StarIcon, BookOpenIcon } from "@heroicons/react/solid";

function CoursePreviewItem() {
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    infinite: true,
    slidesToShow: 3,
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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "-40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          centerPadding: "-6px",
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div>
      <ReactSlider {...settings}>
        {classData.map((course) => (
          <div className="flex flex-row cursor-pointer">
            <img src={course.thumbnail} className="rounded w-30 h-40 " />
            <div>
              <h5>{course.subject.toUpperCase()}</h5>
              <div className="flex flex-row text-yellow-400">
                <StarIcon className="h-6" />
                <StarIcon className="h-6" />
                <StarIcon className="h-6" />
                <StarIcon className="h-6" />
                <StarIcon className="h-6" />
              </div>
              <div className="flex flex-row ">
                <BookOpenIcon className="h-6 mr-2 align-center text-blue-800" />
                <p>By Course Hero</p>
              </div>
              <div className="flex flex-row">
                <UserGroupIcon className="h-6 mr-2 align-center text-gray-400" />
                <p>203 Pelajar, 4 Guru</p>
              </div>
            </div>
          </div>
        ))}
      </ReactSlider>
    </div>
  );
}

export default CoursePreviewItem;
