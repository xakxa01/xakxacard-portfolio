import CardTemplate from "../CardTemplate";
import styles from '../../styles/portfolioCard.module.scss'

export default function PortfolioTitle() {
	return (
		<CardTemplate>
			<div className={styles.portfolioTitle}>
				<h1 className={styles.title}>
					<i>Porta</i><i className={styles.blue}>folio</i>
				</h1>
			</div>
		</CardTemplate>
	)
}
