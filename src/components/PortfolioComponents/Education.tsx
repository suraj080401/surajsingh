"use client";
import React from "react";
import ReactFlow, {
	useNodesState,
	useEdgesState,
	Controls,
	Background,
	BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import EdCustomeNode from "./EdCustomeNode";

const initialNodes = [
	{
		id: "bachelors",
		data: {
			label: "Bachelors of Engineering",
			branch: "Information Technology",
			college: "Panjab University",
			duration: "2019 - 2023",
			location: "Hoshiarpur, Punjab",
			marks: "7.63 CGPA",
		},
		position: { x: 300, y: 50 },
		type: "node1",
	},
	{
		id: "intermediate",
		data: {
			label: "Intermediate",
			branch: "Science",
			college: "Children's Academy",
			duration: "2017 - 2018",
			location: "Dehradun, Uttrarakhand",
			marks: "84%",
		},
		position: { x: 300, y: 250 },
		type: "node1",
	},
	{
		id: "highschool",
		data: {
			label: "High School",
			branch: "Science",
			college: "Children's Academy",
			duration: "2015 - 2016",
			location: "Dehradun, Uttrarakhand",
			marks: "85%",
		},
		position: { x: 300, y: 450 },
		type: "node1",
	},
];

const initialEdges = [
	{
		id: "bachelors-intermediate",
		source: "bachelors",
		target: "intermediate",
		type: "smoothstep",
	},
	{
		id: "intermediate-highschool",
		source: "intermediate",
		target: "highschool",
		type: "smoothstep",
	},
];

const nodeTypes = {
	node1: EdCustomeNode,
};

const Education: React.FC = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	return (
		<ReactFlow
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			nodeTypes={nodeTypes}
		>
			<Background color="#ccc" variant={BackgroundVariant.Dots} />
			<Controls />
		</ReactFlow>
	);
};

export default Education;
