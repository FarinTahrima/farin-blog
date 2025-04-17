import React from "react";
import Summary from "../project_components/home/Summary.tsx";

import TopThreeProjects from "../project_components/home/TopThreeProjects.tsx";
import TopSkillsAndContact from "../project_components/home/TopSkillsAndContact.tsx";

const Home = () => {
    return (
        <div>
            <Summary />
            <TopThreeProjects />
            <TopSkillsAndContact />
            
        </div>
    );
  };
  
  export default Home;