import React from "react";
import "./home.scss";
import Featured from "../../components/featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide";

import { cards, projects } from "../../data";
import CategoryCard from "../../components/categoryCard";
import Features from "../../components/features/Features";
import BusinessFeatures from "../../components/BusinessFeatures";
import ProjectCard from "../../components/projectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5}>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
      <Features />
      <BusinessFeatures />
      <Slide slidesToShow={4}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
