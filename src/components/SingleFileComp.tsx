import React from "react";

interface SingleFileCompDataProps {
	item: {
		component: React.ComponentType<any>;
		title: string;
	};
}

const SingleFileCompData: React.FC<SingleFileCompDataProps> = ({ item }) => {
	const { component: Component, title } = item;
	return (
		<div className="flex flex-row items-center px-9 space-x-1 text-[#A9B1D6] hover:cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 w-full">
			<div>
				<Component />
			</div>
			<div>{title}</div>
		</div>
	);
};

export default SingleFileCompData;
