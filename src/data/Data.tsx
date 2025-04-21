export type Project = {
    title: string;
    location: string;
    top3: boolean;
    id: string;
    simulationCaption?: any;
    description: string;
    features: string[];
    skills: string[];
};


type Location = {
    name: string;
    imageUrl: string;
    bgColor: string;
};

export type Skill = {
  name: string;
  imageUrl: string;
  ratings: number;
  priority: number; // HIGHER THE BETTER
  months: number;
}

export type Work = {
  location: Location;
  skills: string[];
  wordsAboutMe: string[];
  role: string;
  duration: string;
};

export type Education = {
  location: Location;
  course: string;
  skills: string[];
  achievements: string[];
};

export const myProjects: Project[] = [
    { 
      title: "Customer View Calculator", 
      location: "DBS", 
      top3: true,
      id: "customer-view",
      description: "Lorem ipsum",
      features: ["FEATURE A", "RANDOM"],
      skills: ["Java", "SQL", "React"]
    },
    { 
      title: "EventHub", 
      location: "FDM", 
      top3: true,
      id: "event-hub",
      description: "Lorem ipsum",
      features: ["FEATURE A", "RANDOM"],
      skills: ["Java", "SQL", "React"]
    },
    // { title: "Customer View Simulation", location: "DBS", top3: true },
    // { title: "Indicative Pricing", location: "DBS", top3: false },
    // { title: "Latency Indicator", location: "DBS", top3: false },
    // { title: "Checkout V2.0", location: "Eezee", top3: true },
    // { title: "Rail Monitoring System", location: "SIT", top3: false },
    // { title: "Marvel Showcase", location: "NYP", top3: false },
];

export const mySummary= " I have an immense passion for coding with versatile skills in both front-end and back-end."
+ "I love developing quality applications and problem-solving is my favorite part.";

export const myWork: Work[] = [
  {
    location: { name: "DBS", imageUrl: "DBS.jpg" , bgColor: "black"},
    skills: ["Java", "Spring Boot", "Kafka", "SQL", "TypeScript", "Redux", "HTML", "CSS", "GraphQL", "Micro services", "JIRA", "Agile", "Scrum", "Figma", "Jenkins", "Git", "Elastic Search", "Kibana", "Postman", "Testing"],
    wordsAboutMe: ["hard working", "attention to detail","documentation", "organized", "never give up"],
    role: "Full-Stack Developer",
    duration: "1 year"
  },
  {
    location: { name: "FDM", imageUrl: "FDM.png" , bgColor: "#C7FE02"},
    skills: ["Java", "Spring Boot", "Kafka", "SQL", "Web Socket", "React", "Tailwind CSS", "HTML", "JIRA", "Agile", "Scrum", "Git", "Testing", "AI", "Presentation", "GitHub"],
    wordsAboutMe: ["leader", "passionate", "never give up", "pro-active", "confident"],
    role: "IT Consultant",
    duration: "10 months"
  },
  {
    location: { name: "Eezee", imageUrl: "Eezee.png" , bgColor: "white"},
    skills: ["React", "TypeScript", "HTML", "CSS", "Bootstrap", "GitHub", "A/B Testing", "Figma", "Presentation", "Scrum", "Agile"],
    wordsAboutMe: ["kind", "hard working", "friendly", "attention to detail", "positive"],
    role: "Software Engineer Intern",
    duration: "1 year"
  }
];

export const myEducation: Education[] = [
  {
    location: { name: "SIT", imageUrl: "SIT.png" , bgColor: "white"},
    course: "Bsc(Honours) in Information and Communications Technology (majoring) Software Engineering",
    skills: ["Python", "Flask", "HTML", "CSS", "Java", "Bootstrap", ".Net", "C#", "Unity", "Algorithms", "Materialize", "MongoDB", "SQL", "JavaScript", "PHP", "GitHub", "Scrum", "Agile", "Computational Thinking", "Camtasia"],
    achievements: ["Graded A for SMRT project", "Certified Professional Scrum Master from Scrum.org"]
  },
  {
    location: { name: "NYP", imageUrl: "NYP.png" , bgColor: "white"},
    course: "Diploma in Electronics, Computer and Communications Engineering",
    skills: ["C++", "RFID", "Digital Electronics", "Arduino", "Audio & Visuals", "Engineering Mathematics"],
    achievements: ["3rd Prize in AVSD Showcase", "Director's List in Year2 Sem1", "Director's List in Year2 Sem2", "Director's List in Year3 Sem2"]
  }
];

export const mySkills: Skill[] = [
  { name:"A/B Testing", imageUrl: "AB Testing.png", ratings: 3, priority: 2, months: 3 },
  { name:"Agile", imageUrl: "Agile.png", ratings: 8, priority: 4, months: 30 },
  { name:"AI", imageUrl: "AI.jpg", ratings: 2, priority: 3, months: 2 },
  { name:"Algorithms", imageUrl: "Algorithms.png", ratings: 5, priority: 4, months: 6 },
  { name:"Arduino", imageUrl: "Arduino.jpg", ratings: 4, priority: 1, months: 6 },
  { name:"Audio & Visuals", imageUrl: "AVSD.png", ratings: 3, priority: 1, months: 6 },
  { name:"Bootstrap", imageUrl: "Bootstrap.jpg", ratings: 5, priority: 3, months: 12 },
  { name:"C#", imageUrl: "CSharp.png", ratings: 2, priority: 4, months: 3 },
  { name:"C++", imageUrl: "C++.png", ratings: 2, priority: 4, months: 3 },
  { name:"Camtasia", imageUrl: "Camtasia.jpg", ratings: 5, priority: 1, months: 1 },
  { name:"Computational Thinking", imageUrl: "ComputationalThinking.png", ratings: 2, priority: 3, months: 12 },
  { name:"CSS", imageUrl: "CSS.png", ratings: 6, priority: 4, months: 36 },
  { name:"Digital Electronics", imageUrl: "DigitalElectronics.jpg", ratings: 4, priority: 2, months: 6 },
  { name:".Net", imageUrl: "Dotnet.png", ratings: 2, priority: 4, months: 2},
  { name:"Elastic Search", imageUrl: "ElasticSearch.png", ratings: 3, priority: 3, months: 6 },
  { name:"Engineering Mathematics", imageUrl: "EngineeringMathematics.jpg", ratings: 5, priority: 2, months: 24 },
  { name:"Figma", imageUrl: "Figma.png", ratings: 7, priority: 3, months: 36 },
  { name:"Flask", imageUrl: "Flask.png", ratings: 5, priority: 4, months: 6},
  { name:"Git", imageUrl: "Git.png", ratings: 7, priority: 4, months: 12 },
  { name:"GitHub", imageUrl: "GitHub.png", ratings: 8, priority: 4, months: 24 },
  { name:"GraphQL", imageUrl: "GraphQL.png", ratings: 4, priority: 3, months: 3 },
  { name:"HTML", imageUrl: "HTML.png", ratings: 8, priority: 4, months: 36 },
  { name:"Java", imageUrl: "Java.png", ratings: 8, priority: 5, months: 24 },
  { name:"JavaScript", imageUrl: "JavaScript.png", ratings: 6, priority: 4, months: 6 },
  { name:"Jenkins", imageUrl: "Jenkins.png", ratings: 3, priority: 3, months: 6},
  { name:"JIRA", imageUrl: "JIRA.png", ratings: 7, priority: 3, months: 18},
  { name:"Kafka", imageUrl: "Kafka.png", ratings: 4, priority: 3, months: 8 },
  { name:"Kibana", imageUrl: "Kibana.png", ratings: 7, priority: 3, months: 6 },
  { name:"Materialize", imageUrl: "Materialize.png", ratings: 4, priority: 3, months: 3 },
  { name:"Micro services", imageUrl: "Microservices.jpg", ratings: 5, priority: 3, months: 12 },
  { name:"MongoDB", imageUrl: "MongoDB.png", ratings: 4, priority: 4, months: 5 },
  { name:"Openshift", imageUrl: "Openshift.png", ratings: 2, priority: 3 , months: 1},
  { name:"PHP", imageUrl: "PHP.png", ratings: 5, priority: 4, months: 3 },
  { name:"Postman", imageUrl: "Postman.png", ratings: 4, priority: 3, months: 6},
  { name:"Presentation", imageUrl: "Presentation.png", ratings: 6, priority: 3, months: 24 },
  { name:"Python", imageUrl: "Python.jpg", ratings: 5, priority: 5, months: 12 },
  { name:"React", imageUrl: "React.png", ratings: 6, priority: 5, months: 18 },
  { name:"Redux", imageUrl: "Redux.png", ratings: 6, priority: 3, months: 12 },
  { name:"RFID", imageUrl: "RFID.jpg", ratings: 2, priority: 2, months: 1 },
  { name:"Scrum", imageUrl: "Scrum.jpg", ratings: 8, priority: 4, months: 36 },
  { name:"Spring Boot", imageUrl: "Spring Boot.jpg", ratings: 6, priority: 4, months: 18 },
  { name:"SQL", imageUrl: "SQL.png", ratings: 7, priority: 5, months: 24 },
  { name:"Tailwind CSS", imageUrl: "TailwindCSS.png", ratings: 6, priority: 3, months: 3 },
  { name:"Testing", imageUrl: "Testing.png", ratings: 7, priority: 4, months: 24 },
  { name:"TypeScript", imageUrl: "TypeScript.png", ratings: 7, priority: 4, months: 24 },
  { name:"Unity", imageUrl: "Unity.png", ratings: 4, priority: 3, months: 3 },
  { name:"Unix", imageUrl: "Unix.jpg", ratings: 6, priority: 3, months: 6 },
  { name:"Web Socket", imageUrl: "Websockets.png", ratings: 5, priority: 3, months: 2}
];
