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
				className={`hover:text-[#A9B1D6] hover:opacity-100 text-[#A9B1D6] text-3xl px-4 py-2 border-l border-[#1E2138] ${
					currTab === item.title
						? "border-gray-300 text-[#A9B1D6 opacity-100]"
						: "opacity-50"
				}`}
				onClick={() => setCurrTab(item.title)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<Component />
			</div>
			<span
				className={`text-[#A9B1D6] absolute left-16 text-sm top-2 border-[#1B1E2E] bg-[#1E2138] border p-1 whitespace-nowrap ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
			>
				{item.hoverText}
			</span>
		</div>
	);
};

export default LeftTabIcon;
