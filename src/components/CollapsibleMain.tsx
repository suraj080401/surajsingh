import React, { useEffect } from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import CTrigger from "./CTrigger";
import NextSVG, {
	NodeModulusSVG,
	PublicSVG,
	srcSVG,
	eslintSVG,
	gitIgnoreSVG,
	nextConfigSVG,
	packageSVG,
	tailwindSVG,
	tsconfigSVG,
} from "./SVG/NextSVG";
import SubCollapsibleCmp from "./SubCollapsibleCmp";
import SingleFileComp from "./SingleFileComp";

interface CollapsibleMainProps {
	item: string;
}

const SubCollapsibleCmpData = [
	{ title: ".next", component: NextSVG },
	{ title: "node_modules", component: NodeModulusSVG },
	{ title: "public", component: PublicSVG },
	{ title: "src", component: srcSVG },
];

const SingleFileCompData = [
	{ title: ".eslintrc.json", component: eslintSVG },
	{ title: ".gitignore", component: gitIgnoreSVG },
	{ title: "next.config.js", component: nextConfigSVG },
	{ title: "package-lock.json", component: packageSVG },
	{ title: "package.json", component: packageSVG },
	{ title: "tailwind.config.ts", component: tailwindSVG },
	{ title: "tsconfig.json", component: tsconfigSVG },
];

const CollapsibleMain: React.FC<CollapsibleMainProps> = ({ item }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	useEffect(() => {
		if (item === "PORTFOLIO") {
			setIsOpen(true);
		}
	}, []);
	return (
		<Collapsible
			open={isOpen && item === "PORTFOLIO"}
			onOpenChange={setIsOpen}
			className={`border-b-2 border-[#1B1E2E] w-full ${
				item === "PORTFOLIO" && isOpen ? "min-h-[66vh]" : ""
			}`}
			disabled={item !== "PORTFOLIO"}
		>
			<CollapsibleTrigger className="w-full">
				<CTrigger item={item} open={isOpen} />
			</CollapsibleTrigger>
			<CollapsibleContent className="overflow-y-auto h-[62vh] ">
				<div className="flex flex-col space-y-1 my-1">
					{SubCollapsibleCmpData.map((item, i) => {
						return <SubCollapsibleCmp key={i} item={item} />;
					})}
				</div>
				<div className="flex flex-col space-y-1 my-1">
					{SingleFileCompData.map((item, i) => {
						return <SingleFileComp key={i} item={item} />;
					})}
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
};

export default CollapsibleMain;
