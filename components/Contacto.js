import React from 'react'
import styles from '../styles/contacto.module.scss'

export default function Contacto() {
	return (
		<div className={styles.contactoContainer}>
			<h1 clsName={styles.formTitulo}>
				<i className={styles.letter1}>conta</i><i className={styles.letter2}>ctame</i>
			</h1>
			<form className={styles.form}>
				<input
					type="text"
					className={styles.emailInput}
					placeholder="tu email"
				/>
				<textarea
					cols="30"
					rows="5"
					className={styles.messageInput}
					placeholder="tu mensaje"
				></textarea>
				<button
					type="submit"
					className={styles.btnSubmit}
				>
					Enviar
				</button>
			</form>
		</div>
	)
}
