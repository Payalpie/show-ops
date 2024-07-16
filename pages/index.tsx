import { BurgerMenu, LeftArrow } from "@/assets";
import { Sidebar } from "@/components";
import DropZone from "@/components/DropZone";
import { Link2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
	Button,
	Flex,
	Heading,
	Text,
	TextArea,
	TextField,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { timezone } from "@/utils";
import Cookies from "js-cookie";
import { useTheme } from "next-themes";

export default function Home() {
	const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false);
	const [isEvent, setIsEvent] = useState("");
	const [isDate, setIsDate] = useState("");
	const [isTimezone, setIsTimezone] = useState("");
	const [isStarttime, setIsStarttime] = useState("");
	const [isEndtime, setIsEndtime] = useState("");
	const [isDescription, setIsDescription] = useState("");
	const [img, setImg] = useState<any>();
	const { theme } = useTheme();

	const currentDate = new Date().toISOString().split("T")[0];

	const handleImageDrop = (e: any) => {
		console.log(e, "ee");
		const file = e[0];
		const url = URL.createObjectURL(file);
		setImg(url);
	};

	const handelsubmit = () => {
		const eventData: any = {
			eventName: isEvent,
			date: isDate,
			timezone: isTimezone,
			startTime: isStarttime,
			endTime: isEndtime,
			description: isDescription,
			image: img,
		};
		const eventDataString = JSON.stringify(eventData);
		Cookies.set("eventData", eventDataString);

		console.log("Event data stored in cookie:", eventData);
	};

	return (
		<ThemeProvider attribute="class">
			<div
				className={`${
					theme == "dark" ? "bg-[#111210] " : "bg-[#fff]"
				} h-full w-full `}
			>
				<div className={"flex justify-between items-center "}>
					<div className="lg:hidden cursor-pointer">
						<LeftArrow />
					</div>

					<div
						className="lg:hidden cursor-pointer"
						onClick={() => {
							setIsBurgerMenuVisible(true);
						}}
					>
						<BurgerMenu />
					</div>
				</div>
				<Sidebar
					isOpen={isBurgerMenuVisible}
					toggleSidebar={() => {
						setIsBurgerMenuVisible(false);
					}}
				/>

				<div
					className={`float-right h-[100vh] px-2 dashbord s::!max-w-[100%] `}
				>
					<Flex>
						<TextField.Root
							placeholder="Search the docs…"
							className=" my-6 s:w-full lg:max-w-[40%]"
						>
							<TextField.Slot>
								{" "}
								<MagnifyingGlassIcon height="16" width="24" />
							</TextField.Slot>
						</TextField.Root>
					</Flex>
					{/* <div className="w-[50%]">
					<Skeleton />
				</div> */}

					<Flex
						direction={"column"}
						height={"100%"}
						justify={"between"}
						className=" s:w-full lg:w-[50%]"
					>
						<div>
							<Heading weight={"medium"} mb={"4"}>
								Create an Event
							</Heading>
							<Text weight={"light"}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore
							</Text>
						</div>
						<div>
							<Heading size={"4"} mb={"2"} weight={"medium"}>
								Event Name
							</Heading>
							<TextField.Root
								placeholder="Your event name"
								className="p-2 !bg-[#c2c7c057]"
								onChange={(e) => {
									setIsEvent(e.target.value);
								}}
							></TextField.Root>
						</div>
						<div>
							<Heading size={"4"}>Date & Time</Heading>
							{/* <DatePicker /> */}
							<Flex gap={"2"} className="s:flex-col md:flex-row">
								<input
									type="date"
									className="block w-full bg-[#c2c7c057] p-2 rounded-lg"
									onChange={(e) => {
										setIsDate(e.target.value);
									}}
									min={currentDate}
								/>

								<div className="block w-full bg-[#c2c7c057] p-2 rounded-lg">
									<select
										className="bg-transparent w-full "
										onChange={(e) => {
											setIsTimezone(e.target.value);
										}}
									>
										{timezone.map((data) => {
											return (
												<option className="text-black hover:!bg-[#3ba55057] option">
													{data}
												</option>
											);
										})}
									</select>
								</div>
							</Flex>
							<Flex
								gap={"2"}
								className="s:flex-col md:flex-row"
								mt={"2"}
							>
								<input
									type="time"
									className="block w-full bg-[#c2c7c057] p-2 rounded-lg"
									onChange={(e) => {
										setIsStarttime(e.target.value);
									}}
								/>
								<input
									type="time"
									className="block w-full bg-[#c2c7c057] p-2 rounded-lg"
									onChange={(e) => {
										setIsEndtime(e.target.value);
									}}
								/>
							</Flex>
						</div>

						<div>
							<Heading size={"4"} weight={"medium"} mb={"2"}>
								Description
							</Heading>
							<TextArea
								rows={4}
								placeholder="Message..."
								resize="vertical"
								className="!bg-[#c2c7c057]"
								onChange={(e) => {
									setIsDescription(e.target.value);
								}}
							></TextArea>
						</div>
						<div>
							<Heading size={"4"} weight={"medium"} mb={"2"}>
								Video
							</Heading>
							<TextField.Root
								className="!bg-[#c2c7c057] border-0"
								placeholder="Add video link"
							>
								<TextField.Slot>
									<Link2Icon height="16" width="16" />
								</TextField.Slot>
							</TextField.Root>
						</div>

						<div>
							<Heading size={"4"} weight={"medium"} mb={"2"}>
								Banner image
							</Heading>
							<DropZone onDrop={handleImageDrop} />
						</div>

						<Flex align={"center"} gap={"3"} mb={"2"}>
							<Button
								variant="soft"
								size="2"
								color="grass"
								onClick={handelsubmit}
							>
								Create Event
							</Button>
							<Button variant="ghost" size="2" className="">
								Cancel
							</Button>
						</Flex>
					</Flex>
				</div>
			</div>
		</ThemeProvider>
	);
}
