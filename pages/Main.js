import { useId } from "react"
import BackButton from "../components/BackButton"
import MainCard from "../components/cards/MainCard"
import ParallaxText from "../components/ParallaxText"
import Redes from "../components/Redes"
import styles from "../styles/Main.module.scss"

export default function Main() {

	const cardStackers = [MainCard]
	const id = useId()

	return (
		<div className={styles.mainContainer}>
			<Redes />
			<div className={styles.cardContainer}>
				<BackButton />
				{cardStackers.map((Card) => <Card key={id} />)}
			</div>
		</div>
	)
}
