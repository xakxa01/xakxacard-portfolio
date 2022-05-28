import TinderCard from 'react-tinder-card'
import styles from "../styles/cardTemplate.module.scss"

export default function CardTemplate({ children }) {

	return (
		<TinderCard className={styles.cardTemplateContainer}>
			{children}
		</TinderCard>
	)
}
