import React from "react";
import Image, { StaticImageData } from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface CardCompProps {
	item: {
		title: string;
		description: string;
		tech: string;
		allimages: StaticImageData[];
		link: string;
	};
	key: number;
}

const CardComp: React.FC<CardCompProps> = ({ item, key }) => {
	return (
		<Card className="flex flex-col justify-between w-[30vw] h-[55vh] bg-[#505895] border-[#505895] m-4">
			<CardHeader>
				<CardTitle className="text-gray-200">{item.title}</CardTitle>
				<CardDescription className="text-gray-200">
					{item.description}
				</CardDescription>
			</CardHeader>
			<CardContent className="">
				<Carousel>
					<CarouselContent>
						{item.allimages.map((ii, i) => {
							return (
								<CarouselItem key={i}>
									<Image
										src={ii}
										alt={`${i}`}
										className="object-cover w-full h-full"
									/>
								</CarouselItem>
							);
						})}
					</CarouselContent>
					<CarouselPrevious className="left-1" />
					<CarouselNext className="right-1" />
				</Carousel>
				<div className="text-sm text-gray-300 mt-4">Skills: {item.tech}</div>
			</CardContent>
			<CardFooter>
				<Button className="bg-[#1E2138]">
					<a href={item.link}>Visit</a>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default CardComp;
