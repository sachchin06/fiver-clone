import React from "react";
import { Link } from "react-router-dom";
import "./projectCard.scss";

const ProjectCard = ({ item }) => {
  return (
    <Link to='/' className="link">
    <div className="projectCard">
      {item && (
        <>
          <img src={item.img} alt="project" />
          <div className="info">
            <img src={item.pp} alt="" />
            <div className="texts">
              <h3>{item.cat}</h3>
              <span>{item.username}</span>
            </div>
          </div>
        </>
      )}
    </div></Link>
  );
};

export default ProjectCard;
