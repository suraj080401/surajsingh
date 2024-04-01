import React from "react";
import { ReactSVG } from "./SVG/NextSVG";
import { useRecoilState, useRecoilValue } from "recoil";
import currTabinQueue, { allTabsList } from "@/atom/atoms";

const SrcTabs: React.FC = () => {
	const [currTab, setCurrTab] = useRecoilState(currTabinQueue);
	const [allTabs, setAllTabs] = useRecoilState(allTabsList);

	const handleOnlick = (str: string) => {
		setCurrTab(str);
		if (!allTabs.includes(str)) {
			setAllTabs((prevCount) => [...prevCount, str]);
		}
	};

	return (
		<div className="flex flex-col space-y-1 my-1">
			<div
				className={`flex flex-row hover:bg-gray-400 hover:bg-opacity-20 items-center space-x-1 px-9 ${
					currTab == "aboutme" ? "bg-gray-400 bg-opacity-20" : ""
				}`}
				onClick={() => handleOnlick("aboutme")}
			>
				<ReactSVG />
				<p>AboutMe.tsx</p>
			</div>
			<div
				className={`flex flex-row hover:bg-gray-400 hover:bg-opacity-20 items-center space-x-1 px-9 ${
					currTab == "skills" ? "bg-gray-400 bg-opacity-20" : ""
				}`}
				onClick={() => handleOnlick("skills")}
			>
				<ReactSVG />
				<p>Skills.tsx</p>
			</div>
			<div
				className={`flex flex-row hover:bg-gray-400 hover:bg-opacity-20 items-center space-x-1 px-9 ${
					currTab == "workexp" ? "bg-gray-400 bg-opacity-20" : ""
				}`}
				onClick={() => handleOnlick("workexp")}
			>
				<ReactSVG />
				<p>WorkExperience.tsx</p>
			</div>
			<div
				className={`flex flex-row hover:bg-gray-400 hover:bg-opacity-20 items-center space-x-1 px-9 ${
					currTab == "projects" ? "bg-gray-400 bg-opacity-20" : ""
				}`}
				onClick={() => handleOnlick("projects")}
			>
				<ReactSVG />
				<p>Projects.tsx</p>
			</div>
			<div
				className={`flex flex-row hover:bg-gray-400 hover:bg-opacity-20 items-center space-x-1 px-9 ${
					currTab == "education" ? "bg-gray-400 bg-opacity-20" : ""
				}`}
				onClick={() => handleOnlick("education")}
			>
				<ReactSVG />
				<p>Education.tsx</p>
			</div>
		</div>
	);
};

export default SrcTabs;
