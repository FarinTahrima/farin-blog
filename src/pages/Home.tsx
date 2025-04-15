import React from "react";
import Navbar from "../project_components/Navbar.tsx";
import Summary from "../project_components/Summary.tsx";

import TopThreeProjects from "../project_components/TopThreeProjects.tsx";
import TopSkillsAndContact from "../project_components/TopSkillsAndContact.tsx";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Summary />
            <TopThreeProjects />
            <TopSkillsAndContact />
        </div>
    );
  };
  
  export default Home;