import { createRef, useId, useMemo, useRef, useState } from "react"
import BackButton from "../components/BackButton"
import HabilidadesTitleCard from "../components/cards/HabilidadesTitleCard"
import MainCard from "../components/cards/MainCard"
import PortfilioCards from "../components/cards/PortfilioCards"
import PortfolioTitle from "../components/cards/PortfolioTitle"
import Contacto from "../components/Contacto"
import Redes from "../components/Redes"
import { SkillsProvider } from "../context/SkillsContext"
import styles from "../styles/Main.module.scss"
import { GoogleFonts } from "next-google-fonts";
import CardTemplate from "../components/CardTemplate"
import HabilidadesCard1 from "../components/cards/HabilidadesCard1"
import HabilidadesCard2 from "../components/cards/HabilidadesCard2"

export default function Main() {

	const id = useId()

	const cardStackers = [
		MainCard,
		HabilidadesTitleCard,
		HabilidadesCard1,
		HabilidadesCard2,
		PortfolioTitle,
		PortfilioCards,
	].reverse();

	const [currentIndex, setCurrentIndex] = useState(cardStackers.length - 1)

	const currentIndexRef = useRef(currentIndex)

	const childRefs = useMemo(
		() =>
			cardStackers.map(() => createRef()),
		[]
	)

	const updateCurrentIndex = (val) => {
		setCurrentIndex(val)
		currentIndexRef.current = val
	}

	const canGoBack = currentIndex < cardStackers.length - 1

	const swiped = (index) => {
		updateCurrentIndex(index - 1)
	}

	const outOfFrame = (idx) => {
		currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
	}

	const goBack = async () => {
		if (!canGoBack) return
		const newIndex = currentIndex + 1
		updateCurrentIndex(newIndex)
		await childRefs[newIndex].current.restoreCard()
	}

	const configCard = (index) => {
		return {
			ref: childRefs[index],
			onSwipe: () => swiped(index),
			onCardLeftScreen: () => outOfFrame(index),
		}
	}

	return (
		<>
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" />
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;900&display=swap" />

			<div className={styles.mainContainer}>
				<Redes />
				<div className={styles.cardContainer}>
					<BackButton goBack={goBack} />
					{cardStackers.map((Card, index) => (
						<SkillsProvider key={id}>
							<CardTemplate
								className={styles.cardTemplateContainer}
								props={configCard(index)}
							>
								<Card />
							</CardTemplate>
						</SkillsProvider>
					))}
				</div>
			</div>

			<Contacto />
		</>
	)

}

