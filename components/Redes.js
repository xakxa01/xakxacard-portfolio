import Image from 'next/image'
import styles from "../styles/redes.module.scss"

export default function Redes() {
	const redesArray = [
		{
			socialMedia: "instagram",
			link: "https://www.instagram.com/xakxa01",
			icon: '/assets/icons/icons8-instagram-17.svg',
			name: "xakxa01"
		},
		{
			socialMedia: "github",
			link: "https://www.github.com/xakxa01",
			icon: '/assets/icons/github.svg',
			name: "xakxa01"
		},
		{
			socialMedia: "linkedin",
			link: "https://www.linkedin.com/in/carlos-xavier-g%C3%B3mez-barriento-931aa6223/",
			icon: "/assets/icons/linkedin.svg",
			name: "carlos xavier gomez barriento"
		},
	];

	return (
		<aside className={styles.redes__container} data-aos="fade-right">
			{redesArray.map(redes => (
				<div key={redes.title}>
					<a
						className={styles.redes__link}
						href={redes.link}
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src={redes.icon}
							alt={redes.title}
							width={50}
							height={50}
						/>
					</a>
				</div>
			))}
		</aside>
	)
}
