import React from 'react'
import Image from "next/image"
import styles from "../styles/backButton.module.scss"

export default function BackButton() {
	return (
		<div className={styles.backButtonPosition}>
			<div className={styles.backButtonContainer}>
				<div className={styles.backButton} >
					<Image
						src="/assets/icons/bx-refresh.svg"
						alt="back button"
						width={35}
						height={35}
					/>
				</div>
			</div>
		</div>
	)
}
