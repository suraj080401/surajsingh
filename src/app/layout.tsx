import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Suraj Singh Portfolio",
	description: "Software Developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
