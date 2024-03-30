import React from "react";
import { VscChevronRight } from "react-icons/vsc";

interface SubCollapsibleCmpProps {
	item: {
		component: React.ComponentType<any>;
		title: string;
	};
}

const SubCollapsibleCmp: React.FC<SubCollapsibleCmpProps> = ({ item }) => {
	const { component: Component, title } = item;
	return (
		<div className="flex flex-row items-center px-4 space-x-1 text-[#A9B1D6] hover:bg-gray-400 hover:bg-opacity-20">
			<div>
				<VscChevronRight />
			</div>
			<div>
				<Component />
			</div>
			<div>{title}</div>
		</div>
	);
};

export default SubCollapsibleCmp;
