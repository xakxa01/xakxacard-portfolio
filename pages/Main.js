import { createRef, useMemo, useRef, useState } from "react"
import { InfoProvider } from "../context/InfoContext"
import styles from "../styles/Main.module.scss"
import { GoogleFonts } from "next-google-fonts";
import Head from "next/head"
import MainCard from "../components/cards/MainCard"
import PortfolioTitle from "../components/cards/portafolio/PortfolioTitle"
import HabilidadesTitleCard from "../components/cards/habilidades/HabilidadesTitleCard"
import HabilidadesCard1 from "../components/cards/habilidades/HabilidadesCard1"
import HabilidadesCard2 from "../components/cards/habilidades/HabilidadesCard2"
import Contacto from "../components/Contacto"
import Redes from "../components/Redes"
import BackButton from "../components/BackButton"
import CardTemplate from "../components/CardTemplate"
import Helpmyteam from "../components/cards/portafolio/Helpmyteam";

export default function Main() {

	const cardStackers = [
		MainCard,
		HabilidadesTitleCard,
		HabilidadesCard1,
		HabilidadesCard2,
		PortfolioTitle,
		Helpmyteam,
	].reverse();

	const [currentIndex, setCurrentIndex] = useState(cardStackers.length - 1)

	const currentIndexRef = useRef(currentIndex)

	/* Creating an array of refs. */
	const childRefs = useMemo(() => cardStackers.map(() => createRef()), [cardStackers])

	/**
	 * It updates the currentIndex state and the currentIndexRef.current value.
	 * @param val - the value to set the currentIndex to
	 */
	const updateCurrentIndex = (val) => {
		setCurrentIndex(val)
		currentIndexRef.current = val
	}

	/* Checking if the current index is less than the length of the cardStackers array. */
	const canGoBack = currentIndex < cardStackers.length - 1

	/**
	 * If the current index is greater than the index of the card, and the card is not in the frame, then
	 * restore the card.
	 * @param idx - The index of the child component
	 */
	const outOfFrame = (idx) => (
		currentIndexRef.current >= idx
		&& childRefs[idx].current.restoreCard()
	)

	/**
	 * If we can't go back, return. Otherwise, update the current index and restore the card.
	 * @returns The return value of the function is the return value of the last statement in the
	 * function.
	 */
	const goBack = async () => {
		if (!canGoBack) return
		const newIndex = currentIndex + 1
		updateCurrentIndex(newIndex)
		await childRefs[newIndex].current.restoreCard()
	}


	/**
	 * When the user swipes, update the current index to the index of the swiped item minus one.
	 * @param index - The index of the current slide.
	 */
	const swiped = (index) => updateCurrentIndex(index - 1)

	/**
	 * If the card is out of frame, then call the outOfFrame function with the index of the card.
	 * @param index - The index of the card in the stack.
	 * @returns An object with two properties.
	 */
	const configCard = (index) => ({
		ref: childRefs[index],
		onCardLeftScreen: () => outOfFrame(index),
	})

	return (
		<>
			<Head>
				<title>xakxa</title>
			</Head>

			<div className={styles.background}>
				<GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
				<GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" />
				<GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;900&display=swap" />

				<div className={styles.container}>
					<div className={styles.mainContainer}>
						<Redes />
						<div className={styles.cardContainer}>
							<BackButton goBack={goBack} />
							{cardStackers.map((Card, index) => (
								<InfoProvider key={index}>
									<CardTemplate
										className={styles.cardTemplateContainer}
										props={configCard(index)}
										swiped={() => swiped(index)}
									>
										<Card />
									</CardTemplate>
								</InfoProvider>
							))}
						</div>
					</div>

					<Contacto />
				</div>
			</div>
		</>
	)

}

