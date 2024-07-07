import React from 'react';
import PortfolioTitle from "./Title/PortfolioTitle";
import PortfolioProjects from "./Projects/PortfolioProjects";
import PortfolioContact from "./Contact/PortfolioContact";

const PortfolioPage = () => {
  return (
    <div className="max-w-[900px] border border-black m-auto">
      <PortfolioTitle/>
      <PortfolioProjects/>
      <PortfolioContact/>
    </div>
  )
}

export default PortfolioPage;