import * as React from "react";
import styles from "./Footer.module.scss";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
	return (
		<footer className={styles.footer}>
			<div className={styles.group}>
				<a href="/404">Privacy Policy</a>
				<a href="/404">Terms of Use</a>
				<a href="/404">Contact</a>
			</div>
			<div className={styles.group}>
				<a href="/404">Careers</a>
				<a href="/404">About Us</a>
				<a href="/404">Lorem Ipsum</a>
			</div>
		</footer>
	);
}
