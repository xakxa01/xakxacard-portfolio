import TinderCard from 'react-tinder-card'
import styles from "../styles/Main.module.scss"

export default function CardTemplate({ children, props }) {

	return (
		<TinderCard
			className={styles.cardTemplateContainer}
			{...props}
		>
			{children}
		</TinderCard>
	)
}
