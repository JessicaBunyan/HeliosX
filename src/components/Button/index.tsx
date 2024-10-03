import * as React from "react";
import styles from "./Button.module.scss";

export interface IButtonProps {
	text: string;
	disabled?: boolean;
	onClick?: () => void;
}

export function Button({ text, disabled, onClick }: IButtonProps) {
	return (
		<button disabled={!!disabled} className={styles.button} onClick={onClick}>
			{text}
		</button>
	);
}
