import React, { FC } from 'react'
import Image from "next/image"
import styles from "../styles/backButton.module.scss"

interface BackButtonProps {
	goBack: () => void
}

 const BackButton: FC<BackButtonProps> = ({ goBack }) => {
	return (
		<div className={styles.backButtonPosition}>
			<div className={styles.backButtonContainer}>
				<div className={styles.backButton} onClick={() => goBack()}>
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

export default BackButton;