import React from "react";
interface SingleSkillProps {
	item: {
		component: React.ComponentType<any>;
		title: string;
	};
}

const SingleSkill: React.FC<SingleSkillProps> = ({ item }) => {
	const { component: Component, title } = item;

	return (
		<div className="flex flex-col items-center space-y-2 mx-4 w-[7vw] mb-8">
			<Component className={`text-5xl text-black bg-white p-1 rounded-md`} />
			<div className="text-xs p-1 rounded-md bg-[#1E2138] text-white w-full text-center">
				{title}
			</div>
		</div>
	);
};

export default SingleSkill;
