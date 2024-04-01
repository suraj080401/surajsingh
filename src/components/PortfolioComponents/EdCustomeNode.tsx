import React, { memo, FC } from "react";
import { Handle, Position } from "reactflow";

interface NodeProps {
	data: {
		label: string;
		branch: string;
		college: string;
		duration: string;
		location: string;
		marks: string;
	};

	isConnectable: boolean;
}

const EdCustomeNode: FC<NodeProps> = memo(({ data, isConnectable }) => {
	return (
		<>
			<Handle
				type="target"
				position={Position.Top}
				style={{ background: "#555" }}
				isConnectable={isConnectable}
			/>
			<div className="w-[450px] h-30 bg-[#505895] text-gray-200 border font-montserrat rounded-xl p-4 flex flex-col space-y-1">
				<div className="flex flex-row justify-between items-center">
					<div>{data.label}</div>
					<div className="text-sm">{data.duration}</div>
				</div>
				<div>{data.branch}</div>
				<div>
					<div>
						{data.college} - {data.location}
					</div>
				</div>
				<div className="text-sm">Marks : {data.marks}</div>
			</div>
			<Handle
				type="source"
				position={Position.Bottom}
				id="a"
				isConnectable={isConnectable}
			/>
		</>
	);
});

export default EdCustomeNode;
