type Projects = {
    title: string;
    location: string;
    top3: boolean;
};

type Skill = {
    type: string;
    subject: string;
    location: Location;
    skills: string[];
};

type Location = {
    name: string;
    imageUrl: string;
    bgColor: string;
};

export const myProjects: Projects[] = [
    { title: "EventHub", location: "FDM", top3: true },
    { title: "Customer View Simulation", location: "DBS", top3: true },
    { title: "Indicative Pricing", location: "DBS", top3: false },
    { title: "Latency Indicator", location: "DBS", top3: false },
    { title: "Checkout V2.0", location: "Eezee", top3: true },
    { title: "Rail Monitoring System", location: "SIT", top3: false },
    { title: "Marvel Showcase", location: "NYP", top3: false },
];

export const mySummary= " I have an immense passion for coding with versatile skills in both front-end and back-end."
+ "I love developing quality applications and problem-solving is my favorite part.";

export const mySkills: Skill[] = [
    {
      type: "Diploma",
      subject: "Electronics, Computer and Communications Engineering",
      location: {
        name: "Nanyang Polytechnic",
        imageUrl: "NYP.png",
        bgColor: "white"
      },
      skills: ["C++.png", "Arduino.jpg", "RFID.jpg"]
    },
    {
      type: "Degree (Honours)",
      subject: "Information and Communications Technology (majoring) Software Engineering",
      location: {
        name: "Singapore Institute of Technology",
        imageUrl: "SIT.png",
        bgColor: "white"
      },
      skills: ["Python.jpg", "Flask.png", "Java.png", "HTML.png", "CSS.png", "Bootstrap.jpg", "Materialize.png", "Unity.png", "SQL.png", "MongoDB.png", "Algorithms.png", "JavaScript.png", "PHP.png", "GitHub.png"],
    },
    {
      type: "Internship",
      subject: "Software Engineer (Frontend)",
      location: {
        name: "Eezee Pte. Ltd.",
        imageUrl: "Eezee.png",
        bgColor: "white"
      },
      skills: ["React.png", "HTML.png", "CSS.png", "AB Testing.png" , "GitHub.png", "Figma.png"]
    },
    {
      type: "Full-time",
      subject: "IT Consultant",
      location: {
        name: "FDM Singapore Consulting Pte. Ltd.",
        imageUrl: "FDM.png",
        bgColor: "[#C7FE02]"
      },
      skills: ["SQL.png", "Unix.jpg", "Java.png", "Spring Boot.jpg" , "Tailwind CSS.png", "WebSockets.png", "TypeScript.png", "React.png", "JIRA.png"]
    },
    {
      type: "Contract",
      subject: "Full Stack Developer",
      location: {
        name: "DBS Bank Limited",
        imageUrl: "DBS.jpg",
        bgColor: "black"
      },
      skills: ["Redux.png", "TypeScript.png", "Java.png", "Spring Boot.jpg" , "SQL.png", "Kafka.png", "Figma.png", "JIRA.png", "Git.png", "Kibana.png", "Elastic Search.png", "Jenkins.png"]
    }
  ];