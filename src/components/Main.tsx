import React from "react";
import LeftTabs from "./LeftTabs";
import Explorer from "./Explorer";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import Container from "./Container";

const Main: React.FC = () => {
	return (
		<div className="w-full h-[89vh] flex flex-row">
			<LeftTabs />
			<ResizablePanelGroup direction="horizontal">
				<ResizablePanel
					className="flex flex-row"
					defaultSize={25}
					maxSize={30}
					minSize={20}
				>
					<Explorer />
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel className="" defaultSize={75}>
					<Container />
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
};

export default Main;
