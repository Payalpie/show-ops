import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface DropZoneProps {
	onDrop: (files: File[]) => void;
}

const DropZone: React.FC<DropZoneProps> = ({ onDrop }) => {
	const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

	const onDropCallback = useCallback(
		(acceptedFiles: File[]) => {
			setUploadedFiles(acceptedFiles);
			onDrop(acceptedFiles);
		},
		[onDrop]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: onDropCallback,
	});

	return (
		<div
			{...getRootProps()}
			className={` !bg-[#c2c7c057] p-4 rounded-md cursor-pointer ${
				isDragActive ? "border-green-500" : "border-gray-300"
			}`}
		>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<p className="text-center py-10 s:py-5 s:text-[12px] md:text-[16px] text-gray-400">
					Click to upload or drag and drop SVG, PNG, JPG or GIF
					(recommended size 1024x1024px)
					{uploadedFiles.length > 0 && (
						<span className="block mt-2">
							<strong>Uploaded files:</strong>{" "}
							{uploadedFiles.map((file) => file.name).join(", ")}
						</span>
					)}
				</p>
			)}
		</div>
	);
};

export default DropZone;
