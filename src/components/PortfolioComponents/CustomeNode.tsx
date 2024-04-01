import React, { memo, FC } from "react";
import { Handle, Position } from "reactflow";

interface NodeProps {
	data: {
		label: string;
		position: string;
		duration: string;
		skils: string;
		location: string;
		designation: string;
	};

	isConnectable: boolean;
}

const CustomeNode: FC<NodeProps> = memo(({ data, isConnectable }) => {
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
					<div>{data.designation}</div>
					<div className="text-sm">{data.duration}</div>
				</div>
				<div>
					{data.label} - {data.location}
				</div>
				<div className="text-sm">Skills : {data.skils}</div>
			</div>
			<Handle
				type="source"
				position={data.position === "right" ? Position.Left : Position.Right}
				id="a"
				isConnectable={isConnectable}
			/>
		</>
	);
});

CustomeNode.displayName = "CustomeNodeName";

export default CustomeNode;
