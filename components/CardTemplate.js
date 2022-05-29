import TinderCard from 'react-tinder-card'
import styles from "../styles/cardTemplate.module.scss"

export default function CardTemplate({ children }) {

	const onCardLeftScreen = (myIdentifier) => {
		console.log(myIdentifier + ' left the screen')
	}

	return (
		<TinderCard
			className={styles.cardTemplateContainer}
			onCardLeftScreen={() => onCardLeftScreen("main")}
		>
			{children}
		</TinderCard>
	)
}
