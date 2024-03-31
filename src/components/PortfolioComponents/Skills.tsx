import React from "react";
import SingleSkill from "./SingleSkill";
import {
	ProgrammingLanguges,
	FrontendData,
	BackendData,
	ToolsData,
} from "@/lib/data";
import { FaAngleDown } from "react-icons/fa";

const Skills: React.FC = () => {
	return (
		<div className="flex flex-col px-16 py-4 items-center space-y-8 my-4 overflow-y-auto h-full scroll-smooth">
			<div className="bg-[#505895] rounded-xl flex flex-col w-full items-center p-8 space-y-8">
				<div className="text-3xl font-montserrat text-gray-100">
					Programming Languages
				</div>
				<div className="flex flex-row ">
					{ProgrammingLanguges.map((item, key) => {
						return <SingleSkill item={item} key={key} />;
					})}
				</div>
			</div>
			<div className="bg-[#505895] rounded-xl flex flex-col w-full items-center p-8 space-y-8">
				<div className="text-3xl font-montserrat text-gray-100">Frontend</div>
				<div className="flex flex-row flex-wrap justify-center">
					{FrontendData.map((item, key) => {
						return <SingleSkill item={item} key={key} />;
					})}
				</div>
			</div>
			<div className="bg-[#505895] rounded-xl flex flex-col w-full items-center p-8 space-y-8">
				<div className="text-3xl font-montserrat text-gray-100">Backend</div>
				<div className="flex flex-row flex-wrap justify-center">
					{BackendData.map((item, key) => {
						return <SingleSkill item={item} key={key} />;
					})}
				</div>
			</div>
			<div className="bg-[#505895] rounded-xl flex flex-col w-full items-center p-8 space-y-8">
				<div className="text-3xl font-montserrat text-gray-100">
					Tools and Others
				</div>
				<div className="flex flex-row flex-wrap justify-center">
					{ToolsData.map((item, key) => {
						return <SingleSkill item={item} key={key} />;
					})}
				</div>
			</div>
			<div>
				<div className="fixed bottom-4 left-[65vw] transform -translate-x-1/2">
					<FaAngleDown className="animate-bounce text-white text-xl" />
				</div>
			</div>
		</div>
	);
};

export default Skills;
