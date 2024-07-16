import {
	Event,
	Calander,
	Office,
	Setting,
	Dashbord,
	Img1,
	Img2,
	Img3,
} from "../assets";

const sidebarData = [
	{ name: "Dashboard", img: Dashbord },
	{ name: "Calendar", img: Calander },
	{ name: "Events", img: Event },
	{ name: "Offers & Deals", img: Office },
	{ name: "Settings", img: Setting },
];

const eventdata = [
	{ title: "The Viper Room", subtitle: "Tourist", img: Img1 },
	{ title: "The Wiltern", subtitle: "The Troubadour", img: Img2 },
	{ title: "The Troubadour", subtitle: "Brenn!", img: Img3 },
];

const timezone = [
	"Time Zone",
	"Eastern",
	"Central",
	"Mountain",
	"Pacific",
	"Alaskan",
	"Hawaiian",
];
export { sidebarData, eventdata, timezone };
