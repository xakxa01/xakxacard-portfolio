import styles from '../styles/portfolioCard.module.scss'
import Image from 'next/image'

const useCardPortfolio = (name, image, code, website) => (
	<div className={styles.portfolioCard}>
		<div className={styles.portfolioCardImage}>
			<Image
				src={image}
				width={250}
				height={250}
				alt={name}
			/>
		</div>
		<div className={styles.portfolioInfo}>
			<div className={styles.portfolioCardText}>
				<h3 className={styles.portfolioCardTitle}>
					{name}
				</h3>
			</div>
			<div className={styles.portfolioCardButtons}>
				<a
					className={styles.portfolioCardButtonVisit}
					href={website}
					target="_blank"
					rel="noopener noreferrer">
					visitar
				</a>

				<a
					className={styles.portfolioCardButtonWatchCode}
					href={code}
					target="_blank"
					rel="noopener noreferrer">
					<Image
						src="/assets/icons/github.svg"
						alt="github icon"
						width={20}
						height={20}
					/>
					<span className={styles.text}> ver codigo </span>
				</a>
			</div>
		</div>
	</div>
)

export default useCardPortfolio;