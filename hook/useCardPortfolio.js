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
					className={styles.gestureButton}
					href={website}
					target="_blank"
					rel="noopener noreferrer">
					<div className={styles.arrow}>
						<Image
							src="/assets/icons/arrow-left.svg"
							alt="github icon"
							width={20}
							height={20}
						/>
					</div>
					<span className={styles.text}> ver codigo </span>
				</a>

				<a
					className={styles.gestureButton}
					href={code}
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

export default useCardPortfolio;