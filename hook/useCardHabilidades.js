import Image from 'next/image'
import styles from '../styles/habilidadesCard.module.scss'

export default function useCardHabilidades(array, size) {

	return (
		<div className={styles.habilidadesCards}>
			<div className={styles.skillContainer}>
				{array.map(icon => (
					<a
						href={icon.link}
						key={icon.name}
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
