"use client";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import { RecoilRoot } from "recoil";

export default function Home() {
	return (
		<RecoilRoot>
			<main className="flex flex-col h-screen w-screen">
				<Navbar />
				<Main />
				<Footer />
			</main>
		</RecoilRoot>
	);
}
