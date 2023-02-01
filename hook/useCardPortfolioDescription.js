import styles from '../styles/portfolioCardDescrition.module.scss'
import Image from 'next/image'

const useCardPortfolioDescription = (name, image, description, website) => {
	return (
		<div className={styles.portfolioCard}>
			<div className={styles.portfolioCardImage}>
				<Image
					src={image}
					width={1400}
					height={1100}
					alt={name}
				/>
			</div>
			<div className={styles.portfolioInfo}>
				<div className={styles.portfolioCardText}>
					<h3 className={styles.portfolioCardTitle}>
						{name}
					</h3>
				</div>

				<p className={styles.description}>{description}</p>

				<div className={styles.portfolioCardButtons}>
					<a
						className={styles.gestureButton}
						target="_blank"
						rel="noopener noreferrer">
						<span className={styles.text}>visitar</span>
						<div className={styles.arrow}>
							<Image
								src="/assets/icons/arrow-right.svg"
								alt="github icon"
								width={20}
								height={20}
							/>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default useCardPortfolioDescription