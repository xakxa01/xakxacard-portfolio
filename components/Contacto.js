import React from 'react'
import styles from '../styles/contacto.module.scss'
import emailJS from "@emailjs/browser"
import { Field, Form, Formik } from 'formik'
import toast, { Toaster } from "react-hot-toast";

export default function Contacto() {

	const initialValues = { from_name: "", message: "" }

	return (
		<div className={styles.contactoContainer}>
			<h1 className={styles.formTitulo}>
				<i className={styles.letter1}>conta</i><i className={styles.letter2}>ctame</i>
			</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={async (values, { resetForm }) => {
					await emailJS.send(
						process.env.NEXT_PUBLIC_SERVICE_ID,
						process.env.NEXT_PUBLIC_TEMPLATE_ID,
						values,
						process.env.NEXT_PUBLIC_PUBLIC_KEY,
					)
						.then(() => toast.success('correo enviado'))
						.catch(() => toast.error('error enviando correo'))
					resetForm()
				}}
			>
				{() => (
					<Form className={styles.form}>
						<Field
							type="text"
							className={styles.emailInput}
							placeholder="tu email"
							name="from_name"
						/>
						<Field
							name="message"
							as="textarea"
							cols="30"
							rows="5"
							className={styles.messageInput}
							placeholder="tu mensaje"
						/>
						<button
							type="submit"
							className={styles.btnSubmit}
						>
							Enviar
						</button>
					</Form>
				)}
			</Formik>
			<Toaster
				position="top-center"
				reverseOrder={false}
			/>
		</div>
	)
}
