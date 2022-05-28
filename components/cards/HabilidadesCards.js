import React, { useContext, useId } from 'react'
import CardTemplate from '../CardTemplate'
import styles from '../../styles/habilidadesCard.module.scss'
import skillsContext from '../../context/skillsContext'
import Image from 'next/image'

export default function HabilidadesCard() {
	const { iconArray } = useContext(skillsContext)
	const iconArrayImprintCard1 = iconArray.slice(0, 6);
	const iconArrayImprintCard2 = iconArray.slice(6, 13);
	const id = useId()

	const iconCardTemplate = (array, size) => (
		<CardTemplate>
			<div className={styles.habilidadesCards}>
				<div className={styles.skillContainer}>
					{array.map(icon => (
						<a
							href={icon.link}
							key={id}
							className={styles.imgIcon}
							data-aos="fade-up"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={icon.img}
								alt={icon.name}
								width={size}
								height={size}
								draggable={false}
							/>
						</a>
					))}
				</div>
			</div>
		</CardTemplate>
	)

	const Card1 = iconCardTemplate(iconArrayImprintCard1, 80);
	const card2 = iconCardTemplate(iconArrayImprintCard2, 70);
	const cardArray = [
		card2,
		Card1,
	];

	return cardArray.map(card => card)
}
