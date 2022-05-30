import styles from '../../styles/portfolioCard.module.scss'
import Image from 'next/image'

export default function PortfilioCards() {

	const portfolioCardTemplate = (name, description, image, code, website) => (
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
					<p className={styles.portfolioCardDescription}>
						{description}
					</p>
				</div>
				<div className={styles.portfolioCardButtons}>
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
					<a
						className={styles.portfolioCardButtonVisit}
						href={website}
						target="_blank"
						rel="noopener noreferrer">
						visitar
					</a>
				</div>
			</div>
		</div>
	)

	const utesaCard = portfolioCardTemplate(
		"utesa",
		"esta es una pagina web de una universidad de la zona norte de la republica dominicana",
		"/assets/images/img1.png",
		'https://github.com/xakxa01/utesa-remasterizacion-',
		"https://utesa-remasterizacion.vercel.app/",
	);

	const cardArray = [
		utesaCard,
	].reverse()

	return cardArray.map(card => card)
}
