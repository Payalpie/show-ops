// Skeleton.js
import React from "react";

function Skeleton() {
	return (
		<div className="animate-pulse h-full flex flex-col gap-6">
			<div className="h-10 w-[50%] bg-gray-300 rounded" />
			<div className="h-10 w-full bg-gray-300 rounded" />
			<div className="h-20 w-full bg-gray-300 rounded" />

			<div className="h-10 w-full bg-gray-300 rounded" />
			<div className="h-20 w-full bg-gray-300 rounded" />

			<div className="h-10 w-full bg-gray-300 rounded" />
			<div className="h-20 w-full bg-gray-300 rounded" />
		</div>
	);
}

export default Skeleton;
