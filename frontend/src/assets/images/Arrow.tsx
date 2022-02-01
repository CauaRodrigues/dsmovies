import React from "react";

export interface Props {
	styleClass?: string;
}

const Arrow = (props: Props) => {
	return (
		<svg
			width="12"
			height="19"
			viewBox="0 0 12 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={props.styleClass}
		>
			<path
				d="M8.99999 18.0034L11.1158 15.8892L4.24839 9.00159L11.121 2.11918L9.00678 0.00338421L0.00338591 8.99999L8.99999 18.0034Z"
				fill="#C2C2C2"
			/>
		</svg>
	);
};

export default Arrow;
