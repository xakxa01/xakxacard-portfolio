import React from 'react'
import Image from "next/image"
import styles from "../styles/backButton.module.scss"

export default function BackButton() {
	return (
		<div className={styles.backButtonPosition}>
			<div className={styles.backButtonContainer}>
				<div className={styles.backButton} >
					<Image
						src="https://img.icons8.com/material-rounded/35/0099ff/restart--v1.png"
						alt="back button"
						width={35}
						height={35}
					/>
				</div>
			</div>
		</div>
	)
}
