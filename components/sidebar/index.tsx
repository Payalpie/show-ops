import { Logo } from "@/assets";
import { sidebarData, eventdata } from "@/utils";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Box } from "@radix-ui/themes";

function Sidebar({ isOpen, toggleSidebar }: any) {
	const [isOn, setIsOn] = useState(false);
	const [selectedTab, setSelectedTab] = useState("Dashboard");
	const { theme, setTheme } = useTheme();

	return (
		<>
			<Box
				className={`fixed inset-y-0 left-0 z-50 w-full lg:!max-w-[250px] px-6 h-[100vh] transform ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} lg:transform-none transition-transform duration-300 ease-in-out  flex flex-col justify-between ${
					theme == "dark" ? "bg-[#111210]" : "bg-[#fff]"
				}`}
			>
				<div>
					<div className="px-[10px] py-[18px] flex justify-between items-center">
						<Logo />
						<div
							className="lg:hidden cursor-pointer"
							onClick={toggleSidebar}
						>
							╳
						</div>
					</div>
					<div className="my-8">
						{sidebarData.map((data) => {
							return (
								<div
									key={data.name}
									className={`flex rounded-lg items-center ${
										selectedTab === data.name &&
										(theme == "dark"
											? "bg-[#1e3e24]"
											: "bg-[#d0f3d7]")
									} w-full px-4 py-3 cursor-pointer`}
									onClick={() => {
										setSelectedTab(data.name);
									}}
								>
									<div className="mr-4">
										{
											<data.img
												selected={
													selectedTab === data.name
												}
											/>
										}
									</div>
									<span
										className={`${
											selectedTab === data.name &&
											(theme == "dark"
												? "!text-[#89FF9F]"
												: "!text-[#17633c]")
										} font-semibold`}
									>
										{data.name}
									</span>
								</div>
							);
						})}
					</div>
					<div className="py-3 px-4">
						<span className="!text-[#8a8a8a57] font-bold mb-2">
							Today's Events
						</span>
						{eventdata.map((data) => {
							return (
								<div
									key={data.title}
									className="flex items-center py-[14px]"
								>
									<div className="pr-4">{<data.img />}</div>
									<div className="flex flex-col">
										<p className="font-light text-xs">
											{data.subtitle}
										</p>
										<p className="font-medium text-sm">
											{data.title}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="px-[10px] py-[18px] flex flex-col gap-2">
					<div className="flex items-center gap-4">
						<div
							className={`switch ${isOn ? "on" : "off"}`}
							onClick={() => {
								setIsOn(!isOn);
								setTheme(theme == "dark" ? "light" : "dark");
							}}
						>
							<div className="switch-handle"></div>
						</div>
						<span className="font-normal text-base">Dark Mode</span>
					</div>
					<span className="text-[#4caf50] cursor-pointer font-normal text-base">
						Terms of Use
					</span>
					<span className="text-[#4caf50] cursor-pointer font-normal text-base">
						Privacy Policy
					</span>
				</div>
			</Box>
			{/* </div> */}
		</>
	);
}

export default Sidebar;
