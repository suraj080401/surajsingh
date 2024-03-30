import React from "react";
import Image from "next/image";
import VSCODE from "../../public/vscode.png";
import { VscSplitHorizontal } from "react-icons/vsc";
import { VscSplitVertical } from "react-icons/vsc";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { VscChromeRestore } from "react-icons/vsc";

const navbarData: string[] = [
	"File",
	"Edit",
	"Selection",
	"View",
	"Go",
	"Run",
	"Terminal",
	"Help",
];

const styles = {
	iconsGroup1:
		"hover:bg-gray-300 hover:bg-opacity-25 p-1 rounded-md hover:cursor-pointer",
	iconsGroup2:
		"hover:bg-gray-300 hover:bg-opacity-25 w-full px-4 h-full hover:cursor-pointer",
	iconsGroupCross:
		"hover:text-white hover:bg-red-500 w-full px-4 h-full hover:cursor-pointer ",
};

const Navbar: React.FC = () => {
	return (
		<div className="w-full h-[7vh] flex flex-row justify-between pl-2 border-b-2 border-[#1B1E2E] items-center">
			<div className="flex flex-row space-x-4 items-center py-4">
				<div>
					<Image src={VSCODE} alt="vslogo" width={25} height={25} />
				</div>
				{navbarData.map((item, i) => {
					return (
						<div
							key={i}
							className={`text-[#A9B1D6] text-md ${styles.iconsGroup1}`}
						>
							{item}
						</div>
					);
				})}
			</div>
			<div>
				<p className="text-[#A9B1D6]">Suraj Singh - Portfolio</p>
			</div>
			<div className="flex flex-row space-x-4 h-full">
				<div className="flex flex-row text-3xl items-center text-[#A9B1D6] space-x-2">
					<VscLayoutSidebarLeft className={styles.iconsGroup1} />
					<VscSplitHorizontal className={styles.iconsGroup1} />
					<VscSplitVertical className={styles.iconsGroup1} />
				</div>
				<div className="flex flex-row text-xl items-center text-[#A9B1D6]">
					<VscChromeMinimize className={styles.iconsGroup2} />
					<VscChromeRestore className={styles.iconsGroup2} />
					<VscChromeClose className={styles.iconsGroupCross} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
