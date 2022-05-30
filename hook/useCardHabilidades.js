import Image from 'next/image'
import { useId } from 'react'
import styles from '../styles/habilidadesCard.module.scss'

export default function useCardHabilidades(array, size) {

	const id = useId()

	return (
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
	)
}
