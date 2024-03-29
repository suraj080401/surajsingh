import React from "react";
import { VscRemote } from "react-icons/vsc";
import { VscSourceControl } from "react-icons/vsc";
import { VscCloudUpload } from "react-icons/vsc";
import { VscError } from "react-icons/vsc";
import { VscWarning } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc";
import { VscBroadcast } from "react-icons/vsc";

const stylingFooter = {
	vscRemote:
		"text-xs w-8 px-2 items-center h-full bg-gray-300 bg-opacity-25 hover:bg-[#1E2138]",
	hoverStyle:
		"hover:bg-gray-300 hover:bg-opacity-25 flex flex-row items-center h-full px-1 space-x-1",
};

const Footer: React.FC = () => {
	return (
		<div className="w-full h-[4vh] flex flex-row justify-between border-t-2 border-[#1B1E2E] items-center pr-2">
			<div className="flex flex-row items-center text-[#A9B1D6] space-x-1 h-full">
				<VscRemote className={stylingFooter.vscRemote} />
				<div className={stylingFooter.hoverStyle}>
					<VscSourceControl />
					<p className="text-sm">main*</p>
				</div>
				<div className={stylingFooter.hoverStyle}>
					<VscCloudUpload />
				</div>
				<div className={stylingFooter.hoverStyle}>
					<VscError />
					<p>0</p>
				</div>
				<div className={stylingFooter.hoverStyle}>
					<VscWarning />
					<p>0</p>
				</div>
			</div>
			<div className="flex flex-row items-center text-[#A9B1D6] space-x-2 h-full">
				<div className={stylingFooter.hoverStyle}>
					<p>Spaces: 2</p>
				</div>
				<div className={stylingFooter.hoverStyle}>
					<p>UTF-8</p>
				</div>
				<div className={stylingFooter.hoverStyle}>
					<p>CRLF</p>
				</div>
				<div className={stylingFooter.hoverStyle}>
					<p>{`{ } Typescript JSX`}</p>
				</div>
				<div className={stylingFooter.hoverStyle}>
					<VscBroadcast />
					<p>Go Live</p>
				</div>
				<div>
					<VscBellDot />
				</div>
			</div>
		</div>
	);
};

export default Footer;
