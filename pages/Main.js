import { createRef, useId, useMemo, useRef, useState } from "react"
import { InfoProvider } from "../context/InfoContext"
import styles from "../styles/Main.module.scss"
import { GoogleFonts } from "next-google-fonts";

// header
import MainCard from "../components/cards/MainCard"

// portafolio
import MelaniCard from "../components/cards/portafolio/MelaniCard";
import PortfolioTitle from "../components/cards/portafolio/PortfolioTitle"
import AnteriorPortafolio from "../components/cards/portafolio/AnteriorPortafolio";

// habilidades
import HabilidadesCard1 from "../components/cards/habilidades/HabilidadesCard1"
import HabilidadesCard2 from "../components/cards/habilidades/HabilidadesCard2"
import HabilidadesTitleCard from "../components/cards/habilidades/HabilidadesTitleCard"

// otros
import Contacto from "../components/Contacto"
import Redes from "../components/Redes"
import BackButton from "../components/BackButton"
import CardTemplate from "../components/CardTemplate"

export default function Main() {

	const id = useId()

	const cardStackers = [
		MainCard,
		HabilidadesTitleCard,
		HabilidadesCard1,
		HabilidadesCard2,
		PortfolioTitle,
		AnteriorPortafolio,
		MelaniCard,
	].reverse();

	const [currentIndex, setCurrentIndex] = useState(cardStackers.length - 1)

	const currentIndexRef = useRef(currentIndex)

	const childRefs = useMemo(
		() =>
			cardStackers.map(() => createRef()),
		[cardStackers]
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
		<div className={styles.container}>
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" />
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;900&display=swap" />

			<div className={styles.mainContainer}>
				<Redes />
				<div className={styles.cardContainer}>
					<BackButton goBack={goBack} />
					{cardStackers.map((Card, index) => (
						<InfoProvider key={id}>
							<CardTemplate
								className={styles.cardTemplateContainer}
								props={configCard(index)}
							>
								<Card />
							</CardTemplate>
						</InfoProvider>
					))}
				</div>
			</div>

			<Contacto />
		</div>
	)

}

