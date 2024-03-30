"use client";
import React, { useState } from "react";
import { VscFiles } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { VscSourceControl } from "react-icons/vsc";
import { VscDebugAlt } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import LeftTabIcon from "./LeftTabIcon";

const allTabsSection1 = [
	{
		component: VscFiles,
		hoverText: "Explorer(Ctrl+Shift+E)",
		title: "Files",
	},
	{
		component: VscSearch,
		hoverText: "Search(Ctrl+Shift+F)",
		title: "Search",
	},
	{
		component: VscSourceControl,
		hoverText: "Source Control(Ctrl+Shift+G)",
		title: "SourceControl",
	},
	{
		component: VscDebugAlt,
		hoverText: "Run and Debug(Ctrl+Shift+D)",
		title: "RunandDebug",
	},
	{
		component: VscExtensions,
		hoverText: "Extensions(Ctrl+Shift+X)",
		title: "Extensions",
	},
];

const allTabsSection2 = [
	{
		component: VscAccount,
		hoverText: "Accounts",
		title: "Accounts",
	},
	{
		component: VscSettingsGear,
		hoverText: "Settings",
		title: "Settings",
	},
];

const LeftTabs: React.FC = () => {
	const [currTab, setCurrTab] = useState("Files");

	return (
		<div className="w-fit h-full flex flex-col justify-between items-center text-2xl">
			<div className="flex flex-col space-y-4">
				{allTabsSection1.map((item, i) => {
					return (
						<LeftTabIcon
							item={item}
							currTab={currTab}
							setCurrTab={setCurrTab}
							key={i}
						/>
					);
				})}
			</div>
			<div className="flex flex-col space-y-4">
				{allTabsSection2.map((item, i) => {
					return (
						<LeftTabIcon
							item={item}
							currTab={currTab}
							setCurrTab={setCurrTab}
							key={i}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default LeftTabs;
