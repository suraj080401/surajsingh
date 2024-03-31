import React from "react";

import {
	FaGithub,
	FaWindows,
	FaBitbucket,
	FaAngleDown,
	FaPython,
	FaCss3Alt,
	FaReact,
	FaBootstrap,
	FaFigma,
	FaNodeJs,
	FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import {
	SiTypescript,
	SiXcode,
	SiAndroidstudio,
	SiCanva,
	SiExpress,
	SiMacos,
	SiSocketdotio,
	SiNestjs,
	SiCsharp,
	SiHeroku,
	SiMysql,
	SiVercel,
	SiFirebase,
	SiCplusplus,
	SiTailwindcss,
	SiCodio,
	SiRedux,
	SiWebpack,
} from "react-icons/si";

import { IoLogoHtml5 } from "react-icons/io";
import {
	TbBrandNextjs,
	TbBrandReactNative,
	TbBrandVscode,
} from "react-icons/tb";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import SingleSkill from "./SingleSkill";

const ProgrammingLanguges = [
	{
		title: "C++",
		component: SiCplusplus,
	},
	{
		title: "C Lang",
		component: SiCodio,
	},
	{
		title: "Python",
		component: FaPython,
	},
	{
		title: "JavaScript",
		component: IoLogoJavascript,
	},
	{
		title: "Typescript",
		component: SiTypescript,
	},
	{
		title: "C#",
		component: SiCsharp,
	},
];

const FrontendData = [
	{
		title: "HTML",
		component: IoLogoHtml5,
	},
	{
		title: "CSS",
		component: FaCss3Alt,
	},
	{
		title: "ReactJS",
		component: FaReact,
	},
	{
		title: "NextJS",
		component: TbBrandNextjs,
	},
	{
		title: "React Native",
		component: TbBrandReactNative,
	},
	{
		title: "Tailwind CSS",
		component: SiTailwindcss,
	},
	{
		title: "jQuery",
		component: DiJqueryLogo,
	},
	{
		title: "Bootstrap",
		component: FaBootstrap,
	},
	{
		title: "Redux",
		component: SiRedux,
	},
	{
		title: "WebPack",
		component: SiWebpack,
	},
	{
		title: "Figma",
		component: FaFigma,
	},
	{
		title: "Canva",
		component: SiCanva,
	},
];

const BackendData = [
	{
		title: "NodeJs",
		component: FaNodeJs,
	},
	{
		title: "Express",
		component: SiExpress,
	},
	{
		title: "Nestjs",
		component: SiNestjs,
	},
	{
		title: "Mongodb",
		component: DiMongodb,
	},
	{
		title: "Postgresql",
		component: BiLogoPostgresql,
	},
	{
		title: "Firebase",
		component: SiFirebase,
	},
	{
		title: "Heroku",
		component: SiHeroku,
	},
	{
		title: "Mysql",
		component: SiMysql,
	},
	{
		title: "Vercel",
		component: SiVercel,
	},
];

const ToolsData = [
	{
		title: "Git",
		component: FaGitAlt,
	},
	{
		title: "Github",
		component: FaGithub,
	},
	{
		title: "Vscode",
		component: TbBrandVscode,
	},
	{
		title: "Xcode",
		component: SiXcode,
	},
	{
		title: "Windows",
		component: FaWindows,
	},
	{
		title: "Macos",
		component: SiMacos,
	},
	{
		title: "Bitbucket",
		component: FaBitbucket,
	},
	{
		title: "Androidstudio",
		component: SiAndroidstudio,
	},
	{
		title: "SocketIO",
		component: SiSocketdotio,
	},
];

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
					<FaAngleDown className="animate-bounce text-white text-xl" />
				</div>
			</div>
		</div>
	);
};

export default Skills;
