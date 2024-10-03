import * as React from "react";
import { Button } from "../Button";
import styles from "./RadioInput.module.scss";

export interface IRadioInputProps {
	options?: string[];
	onSubmit: (s: string) => void;
	disabled?: boolean;
}

export function RadioInput({ options = ["Yes", "No"], onSubmit, disabled }: IRadioInputProps) {
	return (
		<div className={styles.radioInput}>
			{options.map((o) => {
				return <Button key={o} disabled={disabled} text={o} onClick={() => onSubmit(o)} />;
			})}
		</div>
	);
}
