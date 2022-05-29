import { createRef, useId, useMemo, useRef, useState } from "react"
import BackButton from "../components/BackButton"
import HabilidadesCard from "../components/cards/HabilidadesCards"
import HabilidadesTitleCard from "../components/cards/HabilidadesTitleCard"
import MainCard from "../components/cards/MainCard"
import PortfilioCards from "../components/cards/PortfilioCards"
import PortfolioTitle from "../components/cards/PortfolioTitle"
import Contacto from "../components/Contacto"
import Redes from "../components/Redes"
import { SkillsProvider } from "../context/SkillsContext"
import styles from "../styles/Main.module.scss"
import { GoogleFonts } from "next-google-fonts";

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

	const [currentIndex, setCurrentIndex] = useState(cardStackers.length - 1)

	// used for outOfFrame closure
	const currentIndexRef = useRef(currentIndex)

	const childRefs = useMemo(() =>
		cardStackers.map((i) => createRef())
		, []
	)

	const updateCurrentIndex = (val) => {
		setCurrentIndex(val)
		currentIndexRef.current = val
	}

	const canGoBack = currentIndex < cardStackers.length - 1

	// increase current index and show card
	const goBack = async () => {
		if (!canGoBack) return
		const newIndex = currentIndex + 1
		updateCurrentIndex(newIndex)
		await childRefs[newIndex].current.restoreCard()
		console.log("first")
	}


	return (
		<>
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" />
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;900&display=swap" />
			<div className={styles.mainContainer}>
				{/* <button onClick={() => goBack()}>hola</button> */}
				<Redes />
				<div className={styles.cardContainer}>
					<BackButton goBack={goBack} />
					{reverseCardStackers.map((Card, index) => (
						<SkillsProvider key={id}>
							<Card />
						</SkillsProvider>
					))}
				</div>
			</div>

			<Contacto />
		</>
	)
}
