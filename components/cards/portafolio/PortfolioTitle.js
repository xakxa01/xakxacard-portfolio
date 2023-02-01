import styles from '../../../styles/portfolioCard.module.scss'

export default function PortfolioTitle() {
	return (
		<div className={styles.portfolioTitle}>
			<h1 className={styles.title}>
				<i>Port</i><i className={styles.blue}>folio</i>
			</h1>
		</div>
	)
}
