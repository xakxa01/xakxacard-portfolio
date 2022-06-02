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
	 * If the name of the component is equal to the name of the condition or the other name of the
	 * condition, and the direction is right, open the visit page, else if the direction is left, open the
	 * watchcode page.
	 * @param nameCondition - The name of the component that the user is currently on.
	 * @param otherNameCondition - This is the name of the component that you want to be able to swipe to
	 * from the other direction.
	 * @param visit - the name of the component to be visited
	 * @param watchcode - the name of the component to be opened when the user swipes left
	 * @param direction - the direction of the swipe
	 */
	const gesture = (nameCondition, otherNameCondition, visit, watchcode, direction) => {
		if (nameComponent === nameCondition || nameComponent === otherNameCondition)
			if (direction === 'down') open(visit)
			else if (direction === 'up') open(watchcode)
	}

	/**
	 * It's a function that takes a direction as an argument and then calls another function called
	 * gesture, which takes four arguments: the name of the project, the letter that represents the
	 * project, the URL of the project, and the URL of the project's GitHub repository.
	 * 
	 * The gesture function then calls another function called swiped, which takes no arguments.
	 * 
	 * The swiped function is the one that actually does the work of changing the content of the page.
	 * 
	 * The swiped function is called twice, once for each project.
	 * 
	 * The swiped function is called with the direction argument set to 'left' and then again with the
	 * direction argument set to 'right'.
	 * 
	 * The swiped function is called twice because there are two projects.
	 * 
	 * The swiped function is called with the direction argument set to 'left' and then again with the
	 * direction argument set to 'right' because the
	 * @param direction - The direction of the swipe. It can be 'up', 'down', 'left' or 'right'.
	 */
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