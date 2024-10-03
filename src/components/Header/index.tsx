import * as React from "react";
import styles from "./Header.module.scss";

export function Header() {
	return (
		<header className={styles.header}>
			<img src="MedExpress.png" alt="medexpress logo" />
			<h1>Consultation</h1>
		</header>
	);
}
