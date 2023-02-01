import TinderCard from 'react-tinder-card'
import styles from "../styles/Main.module.scss"

export default function CardTemplate({ children, props, swiped }) {

	/* It's getting the name of the component that is being rendered. */
	const nameComponent = children.type.name;

	/**
	 * Open a new tab with the given URL.
	 * @param url - The URL to open in a new tab.
	 */
	const open = (url) => window.open(url, '_blank')

	/**
	 * It's a function that takes a direction as an argument and then it maps through an array of objects
	 * and if the nameComponent is equal to the nameC in the object, it will open the visit or
	 * watchCode link depending on the direction.
	 * @param direction - The direction of the swipe.
	 */
	const onSwipe = (direction) => {
		let gestureArray = [
			
		]

		gestureArray.map(({ nameC, visit, watchCode }) => {
			if (nameComponent === nameC) {
				if (direction === 'down') open(visit);
				else if (direction === 'up') open(watchCode)
			}
		})

		swiped()
	};

	return (
		<TinderCard
			className={styles.cardTemplateContainer}
			onSwipe={onSwipe}
			{...props}
		>
			{children}
		</TinderCard>
	)

}