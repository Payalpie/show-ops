import { useTheme } from "next-themes";

function Calander({ ...props }) {
	const { theme } = useTheme();
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M3.79998 0.0666504C4.09453 0.0666504 4.33332 0.305434 4.33332 0.599984V1.13332H9.66665V0.599984C9.66665 0.305434 9.90548 0.0666504 10.2 0.0666504C10.4945 0.0666504 10.7333 0.305434 10.7333 0.599984V1.13332H12.3333C13.2169 1.13332 13.9333 1.84966 13.9333 2.73332V12.3333C13.9333 13.2169 13.2169 13.9333 12.3333 13.9333H1.66665C0.782992 13.9333 0.0666504 13.2169 0.0666504 12.3333V2.73332C0.0666504 1.84966 0.782992 1.13332 1.66665 1.13332H3.26665V0.599984C3.26665 0.305434 3.50543 0.0666504 3.79998 0.0666504ZM9.66665 2.19998V2.73332C9.66665 3.02787 9.90548 3.26665 10.2 3.26665C10.4945 3.26665 10.7333 3.02787 10.7333 2.73332V2.19998H12.3333C12.6278 2.19998 12.8667 2.43877 12.8667 2.73332V4.33332H1.13332V2.73332C1.13332 2.43877 1.3721 2.19998 1.66665 2.19998H3.26665V2.73332C3.26665 3.02787 3.50543 3.26665 3.79998 3.26665C4.09453 3.26665 4.33332 3.02787 4.33332 2.73332V2.19998H9.66665ZM1.13332 5.39998V12.3333C1.13332 12.6278 1.3721 12.8667 1.66665 12.8667H12.3333C12.6278 12.8667 12.8667 12.6278 12.8667 12.3333V5.39998H1.13332ZM6.46665 6.99998C6.46665 6.70543 6.70543 6.46665 6.99998 6.46665C7.29453 6.46665 7.53332 6.70543 7.53332 6.99998C7.53332 7.29453 7.29453 7.53332 6.99998 7.53332C6.70543 7.53332 6.46665 7.29453 6.46665 6.99998ZM9.13332 6.46665C8.83877 6.46665 8.59998 6.70543 8.59998 6.99998C8.59998 7.29453 8.83877 7.53332 9.13332 7.53332C9.42787 7.53332 9.66665 7.29453 9.66665 6.99998C9.66665 6.70543 9.42787 6.46665 9.13332 6.46665ZM10.7333 6.99998C10.7333 6.70543 10.9721 6.46665 11.2667 6.46665C11.5612 6.46665 11.8 6.70543 11.8 6.99998C11.8 7.29453 11.5612 7.53332 11.2667 7.53332C10.9721 7.53332 10.7333 7.29453 10.7333 6.99998ZM11.2667 8.59998C10.9721 8.59998 10.7333 8.83877 10.7333 9.13332C10.7333 9.42787 10.9721 9.66665 11.2667 9.66665C11.5612 9.66665 11.8 9.42787 11.8 9.13332C11.8 8.83877 11.5612 8.59998 11.2667 8.59998ZM8.59998 9.13332C8.59998 8.83877 8.83877 8.59998 9.13332 8.59998C9.42787 8.59998 9.66665 8.83877 9.66665 9.13332C9.66665 9.42787 9.42787 9.66665 9.13332 9.66665C8.83877 9.66665 8.59998 9.42787 8.59998 9.13332ZM6.99998 8.59998C6.70543 8.59998 6.46665 8.83877 6.46665 9.13332C6.46665 9.42787 6.70543 9.66665 6.99998 9.66665C7.29453 9.66665 7.53332 9.42787 7.53332 9.13332C7.53332 8.83877 7.29453 8.59998 6.99998 8.59998ZM4.33332 9.13332C4.33332 8.83877 4.5721 8.59998 4.86665 8.59998C5.1612 8.59998 5.39998 8.83877 5.39998 9.13332C5.39998 9.42787 5.1612 9.66665 4.86665 9.66665C4.5721 9.66665 4.33332 9.42787 4.33332 9.13332ZM2.73332 8.59998C2.43877 8.59998 2.19998 8.83877 2.19998 9.13332C2.19998 9.42787 2.43877 9.66665 2.73332 9.66665C3.02787 9.66665 3.26665 9.42787 3.26665 9.13332C3.26665 8.83877 3.02787 8.59998 2.73332 8.59998ZM2.19998 11.2667C2.19998 10.9721 2.43877 10.7333 2.73332 10.7333C3.02787 10.7333 3.26665 10.9721 3.26665 11.2667C3.26665 11.5612 3.02787 11.8 2.73332 11.8C2.43877 11.8 2.19998 11.5612 2.19998 11.2667ZM4.86665 10.7333C4.5721 10.7333 4.33332 10.9721 4.33332 11.2667C4.33332 11.5612 4.5721 11.8 4.86665 11.8C5.1612 11.8 5.39998 11.5612 5.39998 11.2667C5.39998 10.9721 5.1612 10.7333 4.86665 10.7333ZM6.46665 11.2667C6.46665 10.9721 6.70543 10.7333 6.99998 10.7333C7.29453 10.7333 7.53332 10.9721 7.53332 11.2667C7.53332 11.5612 7.29453 11.8 6.99998 11.8C6.70543 11.8 6.46665 11.5612 6.46665 11.2667ZM9.13332 10.7333C8.83877 10.7333 8.59998 10.9721 8.59998 11.2667C8.59998 11.5612 8.83877 11.8 9.13332 11.8C9.42787 11.8 9.66665 11.5612 9.66665 11.2667C9.66665 10.9721 9.42787 10.7333 9.13332 10.7333Z"
				fill={theme !== "dark" || props.selected ? "#1D211C" : "#fff"}
				fill-opacity="0.509804"
			/>
		</svg>
	);
}

export default Calander;
