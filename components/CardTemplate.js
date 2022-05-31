import TinderCard from 'react-tinder-card'
import styles from "../styles/Main.module.scss"

export default function CardTemplate({ children, props, swiped }) {

	const nameComponent = children.type.name;

	const open = (url) =>
		typeof window === 'object'
		&& window.open(url, '_blank')

	const gesture = (nameCondition, visit, watchcode, direction) => {
		if (nameComponent === nameCondition) {
			if (direction === 'right') {
				open(visit)
			} else if (direction === 'left') {
				open(watchcode)
			}
		}
	}

	const onSwipe = (direction) => {
		swiped()

		gesture(
			'AnteriorPortafolio',
			'https://anteriorportafolio.vercel.app/',
			'https://github.com/xakxa01/portafolio',
			direction
		)

		gesture(
			'MelaniCard',
			'https://portafolio-de-disenadora.vercel.app/',
			'https://github.com/xakxa01/portafolio-de-disenadora',
			direction
		)
	};

	return (
		<TinderCard
			className={styles.cardTemplateContainer}
			{...props}
			onSwipe={onSwipe}
		>
			{children}
		</TinderCard>
	)
}
