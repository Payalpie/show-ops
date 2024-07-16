import { useTheme } from "next-themes";

function Dashbord({ ...props }) {
	const { theme } = useTheme();

	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect width="16" height="16" fill="white" fill-opacity="0.01" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2.98665 1.06665L2.93297 1.06662C2.68929 1.06639 2.47923 1.06619 2.29314 1.11087C1.70811 1.25132 1.25132 1.70811 1.11087 2.29314C1.06619 2.47923 1.06639 2.68929 1.06662 2.93297L1.06665 2.98665V5.54665L1.06662 5.60034C1.06639 5.84402 1.06619 6.05409 1.11087 6.24017C1.25132 6.8252 1.70811 7.28199 2.29314 7.42245C2.47923 7.46712 2.68929 7.46692 2.93297 7.46669L2.98665 7.46665H5.54665L5.60034 7.46669C5.84402 7.46692 6.05409 7.46712 6.24017 7.42245C6.8252 7.28199 7.28199 6.8252 7.42245 6.24017C7.46712 6.05409 7.46692 5.84402 7.46669 5.60034L7.46665 5.54665V2.98665L7.46669 2.93297C7.46692 2.68929 7.46712 2.47923 7.42245 2.29314C7.28199 1.70811 6.8252 1.25132 6.24017 1.11087C6.05409 1.06619 5.84402 1.06639 5.60034 1.06662L5.54665 1.06665H2.98665ZM2.54215 2.14806C2.58806 2.13703 2.65836 2.13332 2.98665 2.13332H5.54665C5.87496 2.13332 5.94526 2.13703 5.99116 2.14806C6.18617 2.19488 6.33843 2.34713 6.38526 2.54215C6.39628 2.58806 6.39999 2.65836 6.39999 2.98665V5.54665C6.39999 5.87496 6.39628 5.94526 6.38526 5.99116C6.33843 6.18617 6.18617 6.33843 5.99116 6.38526C5.94526 6.39628 5.87496 6.39999 5.54665 6.39999H2.98665C2.65836 6.39999 2.58806 6.39628 2.54215 6.38526C2.34713 6.33843 2.19488 6.18617 2.14806 5.99116C2.13703 5.94526 2.13332 5.87496 2.13332 5.54665V2.98665C2.13332 2.65836 2.13703 2.58806 2.14806 2.54215C2.19488 2.34713 2.34713 2.19488 2.54215 2.14806ZM10.4533 1.06665L10.3996 1.06662C10.156 1.06639 9.9459 1.06619 9.75981 1.11087C9.17477 1.25132 8.71798 1.70811 8.57753 2.29314C8.53285 2.47923 8.53305 2.68929 8.53329 2.93297L8.53332 2.98665V5.54665L8.53329 5.60034C8.53305 5.84402 8.53285 6.05409 8.57753 6.24017C8.71798 6.8252 9.17477 7.28199 9.75981 7.42245C9.9459 7.46712 10.156 7.46692 10.3996 7.46669L10.4533 7.46665H13.0133L13.067 7.46669C13.3107 7.46692 13.5207 7.46712 13.7069 7.42245C14.2918 7.28199 14.7487 6.8252 14.8892 6.24017C14.9337 6.05409 14.9336 5.84402 14.9333 5.60034V5.54665V2.98665V2.93297C14.9336 2.68929 14.9337 2.47923 14.8892 2.29314C14.7487 1.70811 14.2918 1.25132 13.7069 1.11087C13.5207 1.06619 13.3107 1.06639 13.067 1.06662L13.0133 1.06665H10.4533ZM10.0088 2.14806C10.0547 2.13703 10.125 2.13332 10.4533 2.13332H13.0133C13.3416 2.13332 13.4119 2.13703 13.4578 2.14806C13.6528 2.19488 13.8051 2.34713 13.8519 2.54215C13.8629 2.58806 13.8667 2.65836 13.8667 2.98665V5.54665C13.8667 5.87496 13.8629 5.94526 13.8519 5.99116C13.8051 6.18617 13.6528 6.33843 13.4578 6.38526C13.4119 6.39628 13.3416 6.39999 13.0133 6.39999H10.4533C10.125 6.39999 10.0547 6.39628 10.0088 6.38526C9.8138 6.33843 9.66154 6.18617 9.61473 5.99116C9.6037 5.94526 9.59999 5.87496 9.59999 5.54665V2.98665C9.59999 2.65836 9.6037 2.58806 9.61473 2.54215C9.66154 2.34713 9.8138 2.19488 10.0088 2.14806ZM2.93297 8.53329L2.98665 8.53332H5.54665L5.60034 8.53329C5.84402 8.53305 6.05409 8.53285 6.24017 8.57753C6.8252 8.71798 7.28199 9.17477 7.42245 9.75981C7.46712 9.9459 7.46692 10.156 7.46669 10.3996L7.46665 10.4533V13.0133L7.46669 13.067C7.46692 13.3107 7.46712 13.5207 7.42245 13.7069C7.28199 14.2918 6.8252 14.7487 6.24017 14.8892C6.05409 14.9337 5.84402 14.9336 5.60034 14.9333H5.54665H2.98665H2.93297C2.68929 14.9336 2.47923 14.9337 2.29314 14.8892C1.70811 14.7487 1.25132 14.2918 1.11087 13.7069C1.06619 13.5207 1.06639 13.3107 1.06662 13.067L1.06665 13.0133V10.4533L1.06662 10.3996C1.06639 10.156 1.06619 9.9459 1.11087 9.75981C1.25132 9.17477 1.70811 8.71798 2.29314 8.57753C2.47923 8.53285 2.68929 8.53305 2.93297 8.53329ZM2.98665 9.59999C2.65836 9.59999 2.58806 9.6037 2.54215 9.61473C2.34713 9.66154 2.19488 9.8138 2.14806 10.0088C2.13703 10.0547 2.13332 10.125 2.13332 10.4533V13.0133C2.13332 13.3416 2.13703 13.4119 2.14806 13.4578C2.19488 13.6528 2.34713 13.8051 2.54215 13.8519C2.58806 13.8629 2.65836 13.8667 2.98665 13.8667H5.54665C5.87496 13.8667 5.94526 13.8629 5.99116 13.8519C6.18617 13.8051 6.33843 13.6528 6.38526 13.4578C6.39628 13.4119 6.39999 13.3416 6.39999 13.0133V10.4533C6.39999 10.125 6.39628 10.0547 6.38526 10.0088C6.33843 9.8138 6.18617 9.66154 5.99116 9.61473C5.94526 9.6037 5.87496 9.59999 5.54665 9.59999H2.98665ZM10.4533 8.53332L10.3996 8.53329C10.156 8.53305 9.9459 8.53285 9.75981 8.57753C9.17477 8.71798 8.71798 9.17477 8.57753 9.75981C8.53285 9.9459 8.53305 10.156 8.53329 10.3996L8.53332 10.4533V13.0133L8.53329 13.067C8.53305 13.3107 8.53285 13.5207 8.57753 13.7069C8.71798 14.2918 9.17477 14.7487 9.75981 14.8892C9.9459 14.9337 10.156 14.9336 10.3996 14.9333H10.4533H13.0133H13.067C13.3107 14.9336 13.5207 14.9337 13.7069 14.8892C14.2918 14.7487 14.7487 14.2918 14.8892 13.7069C14.9337 13.5207 14.9336 13.3107 14.9333 13.067V13.0133V10.4533V10.3996C14.9336 10.156 14.9337 9.9459 14.8892 9.75981C14.7487 9.17477 14.2918 8.71798 13.7069 8.57753C13.5207 8.53285 13.3107 8.53305 13.067 8.53329L13.0133 8.53332H10.4533ZM10.0088 9.61473C10.0547 9.6037 10.125 9.59999 10.4533 9.59999H13.0133C13.3416 9.59999 13.4119 9.6037 13.4578 9.61473C13.6528 9.66154 13.8051 9.8138 13.8519 10.0088C13.8629 10.0547 13.8667 10.125 13.8667 10.4533V13.0133C13.8667 13.3416 13.8629 13.4119 13.8519 13.4578C13.8051 13.6528 13.6528 13.8051 13.4578 13.8519C13.4119 13.8629 13.3416 13.8667 13.0133 13.8667H10.4533C10.125 13.8667 10.0547 13.8629 10.0088 13.8519C9.8138 13.8051 9.66154 13.6528 9.61473 13.4578C9.6037 13.4119 9.59999 13.3416 9.59999 13.0133V10.4533C9.59999 10.125 9.6037 10.0547 9.61473 10.0088C9.66154 9.8138 9.8138 9.66154 10.0088 9.61473Z"
				fill={theme !== "dark" || props.selected ? "#1D211C" : "#fff"}

			/>
		</svg>
	);
}

export default Dashbord;
