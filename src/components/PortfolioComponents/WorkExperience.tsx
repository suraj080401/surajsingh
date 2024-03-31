"use client";
import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
	useNodesState,
	useEdgesState,
	Controls,
	Background,
	BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomeNode from "./CustomeNode";

const initialNodes = [
	{
		id: "optum",
		data: {
			label: "Optum",
			position: "right",
			duration: "Feb, 2023-Present",
			skils:
				"VanillaJS, Javascript, ReactJS, NextJS, SQL, Python, C#, RecoilJS, Tanstack, APIs, Postman",
			location: "Hyderabad, IN",
			designation: "Software Engineer",
		},
		position: { x: 550, y: 20 },
		type: "node1",
	},
	{
		id: "masai",
		data: {
			label: "Masai",
			position: "left",
			duration: "Jan, 2023 - Jul, 2023",
			skils:
				"Python, Data Structures, Algrithm, Javascript, Mentoring, Problem Solving",
			location: "Bengaluru, IN",
			designation: "Programming Mentor",
		},
		position: { x: 50, y: 120 },
		type: "node1",
	},
	{
		id: "chicmic",
		data: {
			label: "Chicmic",
			position: "right",
			duration: "Jan, 2023 - Feb, 2023",
			skils: "Javascript, ReactJS, React Native, MaterialUI",
			location: "Moahli, IN",
			designation: "Associate Software Engineer",
		},
		position: { x: 550, y: 220 },
		type: "node1",
	},
	{
		id: "revolute",
		data: {
			label: "Revolute",
			position: "left",
			duration: "Jul, 2022 - Sep, 2022",
			skils: "Javascript,Redux, Figma, React Native, IOS, Android",
			location: "Jaipur, IN",
			designation: "Frontend Developer - Intern",
		},
		position: { x: 50, y: 320 },
		type: "node1",
	},
	{
		id: "cliniker",
		data: {
			label: "Cliniker",
			position: "right",
			duration: "Jan, 2022 - May 2022",
			skils:
				"ReactJS, React Native, Firestore, BitBucket , Algolia , Git, Firebase, Razorpay",
			location: "Noida, IN",
			designation: "SDE1 Intern",
		},
		position: { x: 550, y: 420 },
		type: "node1",
	},
	{
		id: "megladon",
		data: {
			label: "Megladon Analytics",
			position: "left",
			duration: "Nov ,2021 - Jan, 2022",
			skils: "HTML, CSS, Javascript, ReactJS",
			location: "Pune, IN",
			designation: "Web Developer Intern",
		},
		position: { x: 50, y: 520 },
		type: "node1",
	},
];

const initialEdges = [
	{
		id: "optum-masai",
		source: "optum",
		target: "masai",
		type: "smoothstep",
		label: "2024",
	},
	{
		id: "masai-chicmic",
		source: "masai",
		target: "chicmic",
		type: "smoothstep",
		label: "2023",
	},
	{
		id: "chicmic-revolute",
		source: "chicmic",
		target: "revolute",
		type: "smoothstep",
		label: "2022",
	},
	{
		id: "revolute-cliniker",
		source: "revolute",
		target: "cliniker",
		type: "smoothstep",
		label: "2022",
	},
	{
		id: "cliniker-megladon",
		source: "cliniker",
		target: "megladon",
		type: "smoothstep",
		label: "2021",
	},
];

const nodeTypes = {
	node1: CustomeNode,
};

const WorkExperience: React.FC = () => {
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

export default WorkExperience;
