import React from "react";
import Image from "next/image";
import profile from "../../../public/profile.png";
import { FaAngleDown } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { IoMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const AboutMe: React.FC = () => {
	return (
		<div className="flex flex-col h-full w-full overflow-y-auto space-y-6 scroll-smooth">
			<div className="mx-auto mb-2 mt-6">
				<Image
					src={profile}
					alt="vslogo"
					width={300}
					height={300}
					className="rounded-xl object-cover w-60 h-60 transition-transform duration-300 transform hover:scale-105"
				/>
			</div>
			<div className="flex flex-row justify-center space-x-2">
				<p className="text-6xl text-gray-300 font-caveat">Hi I&apos;m </p>
				<p className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-bold text-6xl text-center font-caveat h-16">
					Suraj Singh
				</p>
			</div>
			<div className="flex flex-row justify-center space-x-8 py-2">
				<a
					href="https://www.linkedin.com/in/suraj-singh-1918a3227"
					className="icon-link group"
					title="LinkedIn"
				>
					<IoLogoLinkedin className="icon text-white group-hover:text-blue-500 transform scale-100 group-hover:scale-125 transition-all duration-300 text-3xl" />
				</a>
				<a
					href="https://github.com/suraj080401"
					className="icon-link group"
					title="GitHub"
				>
					<IoLogoGithub className="icon text-white group-hover:text-gray-500 transform scale-100 group-hover:scale-125 transition-all duration-300 text-3xl" />
				</a>
				<a href="tel:+918077696237" className="icon-link group" title="Mail">
					<IoMail className="icon text-white group-hover:text-red-500 transform scale-100 group-hover:scale-125 transition-all duration-300 text-3xl" />
				</a>

				<a
					href="mailto:sooraj.singh080401@gmail.com"
					className="icon-link group"
					title="Phone"
				>
					<FaPhoneSquare className="icon text-white group-hover:text-green-500 transform scale-100 group-hover:scale-125 transition-all duration-300 text-3xl" />
				</a>
			</div>
			<div className="flex flex-row justify-center space-x-8 text-white">
				<p className="p-2 bg-[#505895] rounded-xl hover:transform hover:scale-125 hover:cursor-pointer transition-transform duration-300 font-montserrat">
					Frontend Developer
				</p>
				<p className="p-2 bg-[#505895] rounded-xl hover:transform hover:scale-125 hover:cursor-pointer transition-transform duration-300 font-montserrat">
					Application Developer
				</p>
				<p className="p-2 bg-[#505895] rounded-xl hover:transform hover:scale-125 hover:cursor-pointer transition-transform duration-300 font-montserrat">
					Programming Mentor
				</p>
			</div>

			<div className="px-8 py-4 text-[#A9B1D6]">
				<p className="text-center font-montserrat leading-8">
					As a <span className="text-white">Frontend Developer</span> based in
					<span className="text-white">Dehradun</span>, I bring{" "}
					<span className="text-white">1.5 years</span> of experience in
					crafting dynamic and user-friendly web interfaces. Proficient in{" "}
					<span className="text-white">HTML, CSS, JS, ReactJS </span>, I
					specialize in translating design mockups into responsive and
					interactive websites. With a keen eye for detail and a passion for
					clean and efficient code, I thrive on enhancing user experiences
					through seamless navigation and visually appealing layouts.
				</p>
				<br />
				<p className="text-center font-montserrat leading-8">
					In addition to my frontend skills, I also excel as an{" "}
					<span className="text-white">Application Developer</span>, adept at
					building scalable and robust web applications using frameworks like
					<span className="text-white"> React.js, Next.js</span>. Leveraging my
					experience, I mentor aspiring programmers, guiding them through best
					practices and providing hands-on support to foster their growth and
					success in the field. Committed to staying updated with emerging
					technologies and trends, I am dedicated to delivering high-quality
					solutions that exceed client expectations and drive business
					objectives.
				</p>
			</div>

			<div>
				<div className="fixed bottom-4 left-[65vw] transform -translate-x-1/2">
					<FaAngleDown className="animate-bounce text-white text-2xl" />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
