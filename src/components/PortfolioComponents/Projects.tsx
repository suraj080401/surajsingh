import React from "react";
import CardComp from "./CardComp";
import CryptoFarm1 from "../../../public/CryptoFarm1.png";
import CryptoFarm2 from "../../../public/CryptoFarm2.png";
import CryptoFarm3 from "../../../public/CryptoFarm3.png";
import Clonify1 from "../../../public/Clonify1.png";
import Clonify2 from "../../../public/Clonify2.png";
import COVID191 from "../../../public/COVID19_1.png";
import COVID192 from "../../../public/COVID19_2.png";
import COVID193 from "../../../public/COVID19_3.png";
import Dashboard from "../../../public/Dashboard.png";
import Dashboard1 from "../../../public/Dashboard1.png";
import Dashboard2 from "../../../public/Dashboard2.png";
import Cliniker1 from "../../../public/Cliniker1.png";
import Cliniker2 from "../../../public/Cliniker2.png";

const AllProjects = [
	{
		title: "CryptoFarm",
		description: "All information for the latest cryptocurrency",
		tech: "ReactJS, CSS, MaterialUI, APIs",
		allimages: [CryptoFarm1, CryptoFarm2, CryptoFarm3],
		link: "https://quiet-centaur-4b5b5a.netlify.app/",
	},
	{
		title: "Clonify",
		description: "Dashboard app for data and insights",
		tech: "NextJS, TaiwlindCSS, RecoilJS, VectorCharts, D3.js",
		allimages: [Clonify1, Clonify2],
		link: "https://clonify-8uwy-7t1h34gsk-suraj080401s-projects.vercel.app",
	},
	{
		title: "Covid-19 Tracker",
		description: "Latest news and info about covid-19",
		tech: "ReactJS, ChartJS, APIs, Leaflet, MapJS",
		allimages: [COVID191, COVID192, COVID193],
		link: "https://covid19-tracker-app-d8ae2.web.app",
	},
	{
		title: "Cliniker",
		description: "Web app for booking doctor and test",
		tech: "ReactJS, CSS, Javascript, Firebase, Firestore, APIs",
		allimages: [Cliniker1, Cliniker2],
		link: "https://cliniker.com",
	},
	{
		title: "Dashboard",
		description: "Your company dashboard for data visualisation",
		tech: "NextJS, Javascript, RecoilJS, D3.js, ChartJS",
		allimages: [Dashboard, Dashboard1, Dashboard2],
		link: "https://wasseers-task.vercel.app/",
	},
];

const Projects: React.FC = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center p-8 h-full overflow-y-auto">
			{AllProjects.map((item, i) => {
				return <CardComp item={item} key={i} />;
			})}
		</div>
	);
};

export default Projects;
