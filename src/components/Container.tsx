import currTabinQueue, { allTabsList } from "@/atom/atoms";
import React from "react";
import { useRecoilState } from "recoil";
import { VscChromeClose } from "react-icons/vsc";
import AboutMe from "./PortfolioComponents/AboutMe";
import Skills from "./PortfolioComponents/Skills";
import WorkExperience from "./PortfolioComponents/WorkExperience";
import Projects from "./PortfolioComponents/Projects";
import Education from "./PortfolioComponents/Education";

const TabMap: Record<string, string> = {
	aboutme: "AboutMe.tsx",
	skills: "Skills.tsx",
	workexp: "WorkExperience.tsx",
	projects: "Projects.tsx",
	education: "Education.tsx",
};

const Container: React.FC = () => {
	const [allTabs, setAllTabs] = useRecoilState(allTabsList);
	const [currTab, setCurrTab] = useRecoilState(currTabinQueue);

	const removeTabFromQueue = (event: any, item: string) => {
		event.stopPropagation();
		setAllTabs((prevArray) => prevArray.filter((i) => i !== item));
		setCurrTab("aboutme");
	};

	const currTabComponnet = (currTab: string) => {
		let componentToRender;
		switch (currTab) {
			case "skills":
				componentToRender = <Skills />;
				break;
			case "aboutme":
				componentToRender = <AboutMe />;
				break;
			case "workexp":
				componentToRender = <WorkExperience />;
				break;
			case "projects":
				componentToRender = <Projects />;
				break;
			case "education":
				componentToRender = <Education />;
				break;

			default:
				componentToRender = <div>Default Component</div>;
		}
		return <div className="h-full">{componentToRender}</div>;
	};

	return (
		<div className="flex flex-col h-full">
			<div className="h-[8%] flex flex-row items-center  border-b-2 border-[#1B1E2E]">
				{allTabs.map((item, i) => {
					return (
						<div
							className="pl-6 pr-2 py-2 h-full flex flex-row text-[#A9B1D6] items-center space-x-2 border-b border-r-2 border-b-blue-300 border-r-[#1B1E2E] hover:cursor-pointer"
							onClick={() => {
								setCurrTab(item);
							}}
							key={i}
						>
							<div className="text-md">{TabMap[item]}</div>
							<VscChromeClose
								className="text-2xl hover:bg-gray-300 hover:bg-opacity-25 p-1 rounded-md hover:cursor-pointer"
								onClick={(event) => {
									removeTabFromQueue(event, item);
								}}
							/>
						</div>
					);
				})}
			</div>
			<div className="h-[92%]">{currTabComponnet(currTab)}</div>
		</div>
	);
};

export default Container;
