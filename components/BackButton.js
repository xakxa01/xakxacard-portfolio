import React from 'react'
import Image from "next/image"
import styles from "../styles/backButton.module.scss"

export default function BackButton() {

	// const goBack = async () => {
	// 	if (!canGoBack) return
	// 	const newIndex = currentIndex + 1
	// 	updateCurrentIndex(newIndex)
	// 	await childRefs[newIndex].current.restoreCard()
	// }

	return (
		<div className={styles.backButtonContainer}>
			<div className={styles.backButton}>
				<Image
					src="https://img.icons8.com/material-rounded/30/0099ff/restart--v1.png"
					alt="back button"
					width={30}
					height={30}
				// onClick={() => goBack()}
				/>
			</div>
		</div>
	)
}
