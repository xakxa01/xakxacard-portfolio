import { useId } from "react"
import BackButton from "../components/BackButton"
import HabilidadesCard from "../components/cards/HabilidadesCards"
import HabilidadesTitleCard from "../components/cards/HabilidadesTitleCard"
import MainCard from "../components/cards/MainCard"
import PortfilioCards from "../components/cards/PortfilioCards"
import PortfolioTitle from "../components/cards/PortfolioTitle"
import ParallaxText from "../components/ParallaxText"
import Redes from "../components/Redes"
import { SkillsProvider } from "../context/SkillsContext"
import styles from "../styles/Main.module.scss"

export default function Main() {

	const id = useId()
	const cardStackers = [
		MainCard,
		HabilidadesTitleCard,
		HabilidadesCard,
		PortfolioTitle,
		PortfilioCards,
	]
	const reverseCardStackers = cardStackers.reverse()

	return (
		<div className={styles.mainContainer}>
			<Redes />
			<div className={styles.cardContainer}>
				<BackButton />
				{reverseCardStackers.map((Card) => (
					<SkillsProvider key={id}>
						<Card />
					</SkillsProvider>
				))}
			</div>
		</div>
	)
}
