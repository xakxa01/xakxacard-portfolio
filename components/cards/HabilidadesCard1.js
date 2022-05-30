import Image from 'next/image';
import React, { useContext, useId } from 'react'
import skillsContext from '../../context/SkillsContext';
import styles from '../../styles/habilidadesCard.module.scss'

export default function HabilidadesCard1() {

	const { iconArray } = useContext(skillsContext)
	const iconArrayImprintCard = iconArray.slice(0, 6);
	const id = useId()

	return (
		<div className={styles.habilidadesCards}>
			<div className={styles.skillContainer}>
				{iconArrayImprintCard.map(icon => (
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
							width={70}
							height={70}
							draggable={false}
						/>
					</a>
				))}
			</div>
		</div>
	)
}
