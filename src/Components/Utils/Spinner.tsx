import React from "react";
import styles from "./Spinner.module.scss";

interface SpinnerProps {
	width?: string;
	height?: string;
	backgroundColor?: string;
}

const Spinner: React.FC<SpinnerProps> = (props) => {
	const {width, height, backgroundColor} = props;
	const spinnerStyles: React.CSSProperties = {
		width,
		height,
		borderTopColor: backgroundColor,
	};

	return <div style={{...spinnerStyles}} className={styles.spinner}></div>;
};

export default Spinner;
