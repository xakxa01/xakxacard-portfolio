import toast, { Toaster } from 'react-hot-toast';
import styles from '../../styles/perfilcard.module.scss'
import Image from 'next/image'

const
	size = 200,
	sizeIcon = 30,
	email = 'carlosxaviergomezbarriento@gmail.com';

const PerfilCard = () => {

	const handlerCopy = () => {
		navigator.clipboard.writeText(email)
			.then(() => toast.success('copied'))
	}

	return (
		<div className={styles.container}>
			<div className={styles.imageMe}>
				<Image
					style={{ borderRadius: 100 }}
					src="/assets/images/me.jpg"
					width={size}
					height={size}
					alt="me"
				/>
			</div>
			<p className={styles.name}>Carlos xavier gómez barriento</p>

			<ul>
				{['Spanish: native language', 'English: intermediate'].map(lag => (
					<li key={lag} className={styles.languageList}>
						{lag}
					</li>
				))}
			</ul>

			<p onClick={handlerCopy} className={styles.email} >{email}</p>

			<a
				href="https://github.com/xakxa01/xakxacard-portfolio"
				className={styles.githubButton}>
				<span className={styles.textButton}>WATCH CODE</span>
				<Image
					src='/assets/icons/github.svg'
					alt='github'
					width={sizeIcon}
					height={sizeIcon}
				/>
			</a>
		</div>
	)
}

export default PerfilCard
