import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<main className="flex flex-col h-screen w-screen">
			<Navbar />
			<Main />
			<Footer />
		</main>
	);
}
