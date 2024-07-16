import { useTheme } from "next-themes";
import React from "react";

function BurgerMenu({ ...props }) {
	const { theme } = useTheme();

	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
				fill="#009700"
				fill-opacity="0.0862745"
			/>
			<rect
				width="18"
				height="18"
				transform="translate(11 11)"
				fill="white"
				fill-opacity="0.01"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12.8 14.6C12.4686 14.6 12.2 14.8686 12.2 15.2C12.2 15.5313 12.4686 15.8 12.8 15.8H27.2C27.5313 15.8 27.8 15.5313 27.8 15.2C27.8 14.8686 27.5313 14.6 27.2 14.6H12.8ZM12.2 20C12.2 19.6686 12.4686 19.4 12.8 19.4H27.2C27.5313 19.4 27.8 19.6686 27.8 20C27.8 20.3313 27.5313 20.6 27.2 20.6H12.8C12.4686 20.6 12.2 20.3313 12.2 20ZM12.2 24.8C12.2 24.4687 12.4686 24.2 12.8 24.2H27.2C27.5313 24.2 27.8 24.4687 27.8 24.8C27.8 25.1313 27.5313 25.4 27.2 25.4H12.8C12.4686 25.4 12.2 25.1313 12.2 24.8Z"
				fill="#000000"
				fill-opacity="0.835294"
			/>
		</svg>
	);
}

export default BurgerMenu;
