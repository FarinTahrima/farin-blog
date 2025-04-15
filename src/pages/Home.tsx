import React from "react";
import Summary from "../project_components/Summary.tsx";

import TopThreeProjects from "../project_components/TopThreeProjects.tsx";
import TopSkillsAndContact from "../project_components/TopSkillsAndContact.tsx";

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