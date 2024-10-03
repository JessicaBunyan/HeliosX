import { ReactNode } from "react";
import styles from "./Message.module.scss";
import cx from "classnames";

export interface IMessageProps {
	avatar?: ReactNode;
	message: string;
	variant?: "primary" | "secondary";
}

export function Message({ message, variant = "primary", avatar = null }: IMessageProps) {
	return (
		<div
			className={cx(styles.message, {
				[styles.primary]: variant === "primary",
				[styles.secondary]: variant === "secondary",
			})}>
			<div className={styles.avatar}>{avatar}</div>
			{message}
		</div>
	);
}
