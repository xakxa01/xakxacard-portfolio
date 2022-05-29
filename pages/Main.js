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

	// 	const [currentIndex, setCurrentIndex] = useState(cardStackers.length - 1)
	// 	const [lastDirection, setLastDirection] = useState()
	// 	// used for outOfFrame closure
	// 	const currentIndexRef = useRef(currentIndex)

	// 	const childRefs = useMemo(
	// 		() =>
	// 			cardStackers.map(() => createRef()),
	// 		[]
	// 	)

	// 	const updateCurrentIndex = (val) => {
	// 		setCurrentIndex(val)
	// 		currentIndexRef.current = val
	// 	}

	// 	const canGoBack = currentIndex < cardStackers.length - 1

	// 	const canSwipe = currentIndex >= 0

	// 	// set last direction and decrease current index
	// 	const swiped = (direction, nameToDelete, index) => {
	// 		setLastDirection(direction)
	// 		updateCurrentIndex(index - 1)
	// 	}

	// 	const outOfFrame = (name, idx) => {
	// 		console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
	// 		// handle the case in which go back is pressed before card goes outOfFrame
	// 		currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
	// 		// TODO: when quickly swipe and restore multiple times the same card,
	// 		// it happens multiple outOfFrame events are queued and the card disappear
	// 		// during latest swipes. Only the last outOfFrame event should be considered valid
	// 	}

	// 	const swipe = async (dir) => {
	// 		if (canSwipe && currentIndex < cardStackers.length) {
	// 			await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
	// 		}
	// 	}

	// 	// increase current index and show card
	// 	const goBack = useMemo(async () => {
	// 		if (!canGoBack && currentIndex < cardStackers.length) return
	// 		const newIndex = currentIndex + 1
	// 		updateCurrentIndex(newIndex)
	// 		await childRefs[currentIndex].current.restoreCard() // Swipe the card!
	// 	}, []
	// 	)
	// }

	const onCardLeftScreen = (myIdentifier) => {
		console.log(myIdentifier + ' left the screen')
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
					<BackButton
					// goBack={goBack}
					/>
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
