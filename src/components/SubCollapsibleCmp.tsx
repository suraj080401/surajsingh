import React, { useEffect } from "react";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SrcTabs from "./SrcTabs";

interface SubCollapsibleCmpProps {
	item: {
		component: React.ComponentType<any>;
		title: string;
	};
}

const SubCollapsibleCmp: React.FC<SubCollapsibleCmpProps> = ({ item }) => {
	const { component: Component, title } = item;
	const [isOpen, setIsOpen] = React.useState(false);
	useEffect(() => {
		if (item.title === "public" || item.title === "src") {
			setIsOpen(true);
		}
	}, [item.title]);
	return (
		<div className="text-[#A9B1D6] h-full w-full">
			<Collapsible
				open={isOpen && (item.title === "public" || item.title === "src")}
				onOpenChange={setIsOpen}
				className="w-full"
			>
				<CollapsibleTrigger>
					<div className="flex flex-row items-center px-4 space-x-1 h-full w-96 hover:bg-gray-400 hover:bg-opacity-20">
						{isOpen ? <VscChevronDown /> : <VscChevronRight />}
						<div>
							<Component />
						</div>
						<div>{title}</div>
					</div>
				</CollapsibleTrigger>
				<CollapsibleContent className="w-full ml-2">
					{item.title === "src" && <SrcTabs />}
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
};

export default SubCollapsibleCmp;
