import React from "react";

function LeftArrow({ ...props }) {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect width="40" height="40" fill="white" fill-opacity="0.01" />
			<path
				d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
				fill="#002000"
				fill-opacity="0.0627451"
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
				d="M21.6102 14.7621C21.852 14.9888 21.8642 15.3685 21.6376 15.6102L17.5223 19.9999L21.6376 24.3894C21.8642 24.6312 21.852 25.0109 21.6102 25.2376C21.3685 25.4642 20.9888 25.4519 20.7621 25.2102L16.2621 20.4102C16.0458 20.1794 16.0458 19.8203 16.2621 19.5895L20.7621 14.7895C20.9888 14.5477 21.3685 14.5355 21.6102 14.7621Z"
				fill="#60655F"
			/>
		</svg>
	);
}

export default LeftArrow;
