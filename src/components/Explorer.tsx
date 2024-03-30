"use client";
import React from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { VscEllipsis } from "react-icons/vsc";
import CTrigger from "./CTrigger";
import CollapsibleMain from "./CollapsibleMain";

const CollapsibleData = [
	"OPEN EDITORS",
	"PORTFOLIO",
	"OUTLINE",
	"TIMELINE",
	"SCRIPTS",
];

const Explorer: React.FC = () => {
	return (
		<div className="w-full flex flex-col">
			<div className="flex flex-row justify-between text-[#A9B1D6] text-sm items-center p-4">
				<p>EXPLORER</p>
				<VscEllipsis />
			</div>
			<div className="flex flex-col w-full">
				{CollapsibleData.map((item, i) => {
					return <CollapsibleMain key={i} item={item} />;
				})}
			</div>
		</div>
	);
};

export default Explorer;
