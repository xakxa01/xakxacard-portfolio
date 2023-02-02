import Image from 'next/image'
import styles from '../styles/skillsCard.module.scss'

const useCardSkill = (array, size) => (
	<div className={styles.skillsCards}>
		<div className={styles.skillContainer}>
			{array.map(icon => (
				<div
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
				</div>
			))}
		</div>
	</div>
)

export default useCardSkill;