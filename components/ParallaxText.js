import { useId } from 'react';
import styles from "../styles/parallaxText.module.scss"

export default function ParallaxText() {

	const id = useId();

	if (typeof window === 'object') {
		let position = document.documentElement;
		position.addEventListener("mousemove", e => {
			position.style.setProperty('--x', e.clientX + 'px')
		});
	}

	const numberWords = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	const numberLines = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<section className={styles.section} >
			<div className={styles.text}>
				{numberLines.map(() => (
					<h2 key={id} className={styles.letterContainer} >
						{numberWords.map(() => (
							<span key={id} className={styles.word}>
								xakxa
							</span>
						))}
					</h2>
				))}
			</div>
		</section>
	)
}
