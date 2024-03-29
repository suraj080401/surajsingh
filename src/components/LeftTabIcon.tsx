"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

interface LeftTabIconProps {
	item: {
		component: React.ComponentType<any>;
		hoverText: string;
		title: string;
	};
	currTab: string;
	setCurrTab: Dispatch<SetStateAction<string>>;
}

const LeftTabIcon: React.FC<LeftTabIconProps> = ({
	item,
	currTab,
	setCurrTab,
}) => {
	const { component: Component, hoverText } = item;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="relative">
			<div
				className={`text-4xl px-4 py-3 border-l border-[#1E2138] ${
					currTab === item.title && "border-gray-300"
				}`}
				onClick={() => setCurrTab(item.title)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<Component />
			</div>
			<span
				className={`absolute left-16 text-sm top-4 border-[#1B1E2E] border p-1 whitespace-nowrap ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
			>
				{item.hoverText}
			</span>
		</div>
	);
};

export default LeftTabIcon;
