import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Person = ({ person }) => {
  const { id, name, job, image, text } = person;
  return (
    <>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </>
  );
};

export default Person;
