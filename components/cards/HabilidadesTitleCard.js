import styles from "../../styles/habilidadesCard.module.scss"
import CardTemplate from "../CardTemplate"

export default function HabilidadesTitleCard() {

	return (
		<CardTemplate>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>HABILIDADE</h1>
			</div>
		</CardTemplate>
	)
}
