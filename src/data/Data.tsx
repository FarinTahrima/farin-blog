type Projects = {
    title: string;
    location: string;
    top3: boolean;
};


type Location = {
    name: string;
    imageUrl: string;
    bgColor: string;
};

type Skill = {
  name: string;
  imageUrl: string;
  ratings: number;
  priority: number; // HIGHER THE BETTER
  duration: string;
}

export type Work = {
  location: Location;
  skills: string[];
  wordsAboutMe: string[];
  role: string;
  duration: string;
};

type Education = {
  location: Location;
  course: string;
  skills: string[];
  achievements: string[];
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
    skills: ["C++", "RFID", "Arduino", "Engineering Mathematics", "Digital Electronics", "Audio & Visuals"],
    achievements: ["3rd Prize in AVSD Showcase", "Director's List in Year 2 Sem 1", "Director's List in Year 2 Sem 2", "Director's List in Year 3 Sem 2"]
  }
];

export const mySkills: Skill[] = [
  { name:"A/B Testing", imageUrl: "AB Testing.png", ratings: 3, priority: 2, duration: "3 months" },
  { name:"Agile", imageUrl: "Agile.png", ratings: 8, priority: 4, duration: "2.5 years" },
  { name:"AI", imageUrl: "AI.jpg", ratings: 2, priority: 3, duration: "2 months" },
  { name:"Algorithms", imageUrl: "Algorithms.png", ratings: 5, priority: 4, duration: "6 months" },
  { name:"Arduino", imageUrl: "Arduino.jpg", ratings: 4, priority: 1, duration: "6 months" },
  { name:"Audio & Visuals Systems Design", imageUrl: "AVSD.png", ratings: 3, priority: 1, duration: "6 months" },
  { name:"Bootstrap", imageUrl: "Bootstrap.jpg", ratings: 5, priority: 3, duration: "1 year" },
  { name:"C#", imageUrl: "C#.png", ratings: 2, priority: 4, duration: "3 months" },
  { name:"C++", imageUrl: "C++.png", ratings: 2, priority: 4, duration: "3 months" },
  { name:"Camtasia", imageUrl: "Camtasia.png", ratings: 5, priority: 1, duration: "1 month" },
  { name:"Computational Thinking", imageUrl: "ComputationalThinking.png", ratings: 2, priority: 3, duration: "1 year" },
  { name:"CSS", imageUrl: "CSS.png", ratings: 6, priority: 4, duration: "3 years" },
  { name:"Digital Electronics", imageUrl: "DigitalElectronics.jpg", ratings: 4, priority: 2, duration: "6 months" },
  { name:".NET", imageUrl: "Dotnet.png", ratings: 2, priority: 4, duration: "2 months"},
  { name:"Elastic Search", imageUrl: "ElasticSearch.png", ratings: 3, priority: 3, duration: "6 months" },
  { name:"Engineering Mathematics", imageUrl: "EngineeringMathematics.jpg", ratings: 5, priority: 2, duration: "2 years" },
  { name:"Figma", imageUrl: "Figma.png", ratings: 7, priority: 3, duration: "3 years" },
  { name:"Flask", imageUrl: "Flask.png", ratings: 5, priority: 4, duration: "6 months"},
  { name:"Git", imageUrl: "Git.png", ratings: 7, priority: 4, duration: "1 year" },
  { name:"GitHub", imageUrl: "GitHub.png", ratings: 8, priority: 4, duration: "2 years" },
  { name:"GraphQL", imageUrl: "GraphQL.png", ratings: 4, priority: 3, duration: "3 months" },
  { name:"HTML", imageUrl: "HTML.png", ratings: 8, priority: 4, duration: "3 years" },
  { name:"Java", imageUrl: "Java.png", ratings: 8, priority: 5, duration: "2 years" },
  { name:"JavaScript", imageUrl: "JavaScript.png", ratings: 6, priority: 4, duration: "6 months" },
  { name:"Jenkins", imageUrl: "Jenkins.png", ratings: 3, priority: 3, duration: "6 months"},
  { name:"JIRA", imageUrl: "JIRA.png", ratings: 7, priority: 3, duration: "1.5 years"},
  { name:"Kafka", imageUrl: "Kafka.png", ratings: 4, priority: 3, duration: "8 months" },
  { name:"Kibana", imageUrl: "Kibana.png", ratings: 7, priority: 3, duration: "6 months" },
  { name:"Materialize", imageUrl: "Materialize.png", ratings: 4, priority: 3, duration: "3 months" },
  { name:"Micro services", imageUrl: "Microservices.jpg", ratings: 5, priority: 3, duration: "1 year" },
  { name:"MongoDB", imageUrl: "MongoDB.png", ratings: 4, priority: 4, duration: "5 months" },
  { name:"Openshift", imageUrl: "Openshift.png", ratings: 2, priority: 3 , duration: "2 weeks"},
  { name:"PHP", imageUrl: "PHP.png", ratings: 5, priority: 4, duration: "3 months" },
  { name:"Postman", imageUrl: "Postman.png", ratings: 4, priority: 3, duration: "6 months"},
  { name:"Presentation", imageUrl: "Presentation.png", ratings: 6, priority: 3, duration: "2 years" },
  { name:"Python", imageUrl: "Python.jpg", ratings: 5, priority: 5, duration: "1 year" },
  { name:"React", imageUrl: "React.png", ratings: 6, priority: 5, duration: "1.5 years" },
  { name:"Redux", imageUrl: "Redux.png", ratings: 6, priority: 3, duration: "1 years" },
  { name:"RFID", imageUrl: "RFID.jpg", ratings: 2, priority: 2, duration: "1 month" },
  { name:"Scrum", imageUrl: "Scrum.jpg", ratings: 8, priority: 4, duration: "3 years" },
  { name:"Spring Boot", imageUrl: "Spring Boot.jpg", ratings: 6, priority: 4, duration: "1.5 years" },
  { name:"SQL", imageUrl: "SQL.png", ratings: 7, priority: 5, duration: "2 years" },
  { name:"Tailwind CSS", imageUrl: "TailwindCSS.png", ratings: 6, priority: 3, duration: "3 months" },
  { name:"Testing", imageUrl: "Testing.png", ratings: 7, priority: 4, duration: "2 years" },
  { name:"TypeScript", imageUrl: "TypeScript.png", ratings: 7, priority: 4, duration: "2 years" },
  { name:"Unity", imageUrl: "Unity.png", ratings: 4, priority: 3, duration: "3 months" },
  { name:"Unix", imageUrl: "Unix.jpg", ratings: 6, priority: 3, duration: "6 months" },
  { name:"Web Socket", imageUrl: "Websockets.png", ratings: 5, priority: 3, duration: "2 months"}
];