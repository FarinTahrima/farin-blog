import React from "react";
import { DEFAULT_FONT_COLOR, DEFAULT_FONT_FAMILY } from "../utils/style-utils.tsx";
import Card from "../reusable_components/Card.tsx";
import CardWithTitle from "../reusable_components/Card-with-Title.tsx";
import NumberedList from "../reusable_components/Numbered-List.tsx";
import { myProjects, mySkills, Project } from "../data/Data.tsx";
import RoundedImage from "../reusable_components/RoundedImage.tsx";
import { useParams } from "react-router-dom";
import FlashMessage from "../reusable_components/FlashMessage.tsx";
import CustomerViewSimulation from "../project_components/simulation/customer-view/CustomerViewSimulation.tsx";

const ProjectPage = () => {
    let id = useParams().id;
    const project: Project|undefined = myProjects.find(p => p.id === id);

    const getSimulationElement = (id: string): any => {
        switch(id){
            case "customer-view":
                return <CustomerViewSimulation />
            default:
                return (
                <FlashMessage
                    message={"Sorry, this simulation is not available at the moment."}
                    style={{
                        fontFamily: DEFAULT_FONT_FAMILY,
                        textColour:"red-700",
                        borderColour:"red-700",
                        bgColour:"red-100",
                        borderThickness: 2
                    }}
                />);
        }
    };

    return project 
        ? (
            <div className="max-sm:p-4 sm:p-4 2xl:p-16 md:p-8">
                <p className={`font-family-[${DEFAULT_FONT_FAMILY}] text-${DEFAULT_FONT_COLOR} text-3xl max-sm:text-2xl font-bold mb-4`}>
                    {project.title}
                </p>

                <div className="grid lg:grid-cols-3 2xl:grid-cols-4 max-sm:grid-cols-1 gap-8">
                    <div className="lg:col-span-2 2xl:col-span-3">
                        <Card
                            style={{
                                bgColour: "white"
                            }}
                        >
                            <div className="flex justify-around p-4">
                               <div className="w-[80%] max-sm:w-[100%]">
                                    {getSimulationElement(project.id)}
                               </div>  
                            </div>
                        </Card>
                    </div>
                    <div className="h-auto">
                        <Card
                            style={{
                                bgColour: "my_light_purple"
                            }}
                        >
                            <div className="h-[700px] max-sm:h-[350px] w-full">
                                
                            </div>
                        </Card>
                    </div>
                </div>

                <p className={`font-family-[${DEFAULT_FONT_FAMILY}] text-my_dark_blue 2xl:text-2xl text-xl max-sm:text-xl my-8 font-bold`}>
                    {project.description}
                </p>

                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 mt-2">
                    <CardWithTitle
                        title={{
                            value: "Major Features",
                            titleStyle: {
                                fontFamily: DEFAULT_FONT_FAMILY,
                                textColour: DEFAULT_FONT_COLOR,
                                bold: true
                            }
                        }}
                        cardStyle={{
                            bgColour: "my_light_purple"
                        }}
                    >
                        <div className="p-2 2xl:p-8 h-auto">
                            <NumberedList 
                                list={project.features}
                                style={{
                                    fontFamily: DEFAULT_FONT_FAMILY,
                                    textColour: "my_dark_purple"
                                }}
                            />
                        </div>
                    </CardWithTitle>

                    <CardWithTitle
                        title={{
                            value: "Skills Gained",
                            titleStyle: {
                                fontFamily: DEFAULT_FONT_FAMILY,
                                textColour: "my_dark_blue",
                                bold: true
                            }
                        }}
                        cardStyle={{
                            bgColour: "my_pink"
                        }}
                    >
                        <div className="p-4 h-auto">
                            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 grid-cols-3 max-sm:grid-cols-3 py-2 justify-items-center">
                                {project.skills.map((skill, key) => {
                                    const skilInfo = mySkills.find((s => s.name === skill));
                                    return (
                                        <div key={key} className="grid justify-items-center py-2 2xl:py-8 xl:py-4">
                                            <RoundedImage
                                                src={`../images/skills/${skilInfo?.imageUrl}`}
                                                radius={40}
                                                alt={skilInfo?.name}
                                            />
                                            <p className="text-my_dark_blue text-center text-lg 2xl:text-3xl font-bold max-sm:text-base">
                                                {skilInfo?.name}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </CardWithTitle>
                </div>
            
            </div>
        )
        : (
            <div className="p-4">
                <FlashMessage
                    message={"Sorry, this project is not available. Please check the url or select a project from My Projects."}
                    style={{
                        fontFamily: DEFAULT_FONT_FAMILY,
                        textColour:"red-700",
                        borderColour:"red-700",
                        bgColour:"red-100",
                        borderThickness: 2
                    }}
                />
            </div>
        );
  };
  
  export default ProjectPage;

