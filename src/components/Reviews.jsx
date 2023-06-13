import React, { useState } from "react";
import Person from "./Person";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = ({ reviews }) => {
  const [currentIndex, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }

    if (number < 0) {
      return reviews.length - 1;
    }

    return number;
  };

  const onPreviousClick = () => {
    setIndex((prev) => {
      let prevIndex = prev - 1;
      //   prevIndex = checkNumber(prevIndex);
      prevIndex = (prevIndex + reviews.length) % reviews.length;
      return prevIndex;
    });
  };

  const onNextClick = () => {
    setIndex((prev) => {
      let nextIndex = prev + 1;
      nextIndex = nextIndex % reviews.length;
      //   nextIndex = checkNumber(nextIndex);
      return nextIndex;
    });
  };

  const showRandomPerson = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === currentIndex) {
      randomIndex + 1;
    }
    setIndex(checkNumber(randomIndex));
  };

  return (
    <section className="review">
      <Person person={reviews[currentIndex]} />
      <div className="btn-container">
        <button className="prev-btn" onClick={onPreviousClick}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="next-btn" onClick={onNextClick}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <div className="btn-container" onClick={showRandomPerson}>
        <button className="btn btn-hipster">Surprise Me</button>
      </div>
    </section>
  );
};

export default Reviews;
