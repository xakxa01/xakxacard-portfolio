import TinderCard from 'react-tinder-card'
import styles from "../styles/Main.module.scss"

export default function CardTemplate({ children, props, swiped }) {

	const nameComponent = children.type.name;

	const open = async (url) => await window.open(url, '_blank')

	const gesture = (nameCondition, otherNameCondition, visit, watchcode, direction) => {
		if (nameComponent === nameCondition || nameComponent === otherNameCondition) {
			if (direction === 'right') {
				open(visit)
			} else if (direction === 'left') {
				open(watchcode)
			}
		}
	}


	const onSwipe = (direction) => {

		gesture(
			'AnteriorPortafolio',
			'L',
			'https://anteriorportafolio.vercel.app/',
			'https://github.com/xakxa01/portafolio',
			direction
		)

		gesture(
			'MelaniCard',
			'N',
			'https://portafolio-de-disenadora.vercel.app/',
			'https://github.com/xakxa01/portafolio-de-disenadora',
			direction
		)

		swiped()
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