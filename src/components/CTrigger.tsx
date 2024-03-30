import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { VscNewFile } from "react-icons/vsc";
import { VscNewFolder } from "react-icons/vsc";
import { VscDebugRestart } from "react-icons/vsc";
import { VscCollapseAll } from "react-icons/vsc";

interface CTriggerProps {
	item: string;
	open: boolean;
}

const styles = {
	iconsGroup1:
		"hover:bg-gray-300 text-xl hover:bg-opacity-25 rounded-md hover:cursor-pointer",
};

const CTrigger: React.FC<CTriggerProps> = ({ item, open }) => {
	return (
		<div className="w-full h-full flex flex-row items-center justify-between text-[#A9B1D6] py-1">
			<div className="flex flex-row space-x-1">
				<div className="text-lg">
					{open ? <VscChevronDown /> : <VscChevronRight />}
				</div>
				<div className="font-bold text-sm">{item}</div>
			</div>
			<div>
				{open ? (
					<div className="flex flex-row space-x-2 mx-2">
						<VscNewFile className={styles.iconsGroup1} />
						<VscNewFolder className={styles.iconsGroup1} />
						<VscDebugRestart className={styles.iconsGroup1} />
						<VscCollapseAll className={styles.iconsGroup1} />
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default CTrigger;
