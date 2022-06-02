import React from 'react'
import styles from '../styles/contacto.module.scss'
import emailJS from "@emailjs/browser"
import { Field, Form, Formik, ErrorMessage } from 'formik'
import toast, { Toaster } from "react-hot-toast";
import * as yup from 'yup'

export default function Contacto() {

	const initialValues = { from_name: "", message: "" }

	const emailFunction = async (values) =>
		await emailJS.send(
			process.env.NEXT_PUBLIC_SERVICE_ID,
			process.env.NEXT_PUBLIC_TEMPLATE_ID,
			values,
			process.env.NEXT_PUBLIC_PUBLIC_KEY,
		)
			.then(() => toast.success('correo enviado'))
			.catch(() => toast.error('error enviando correo'))

	const validation = yup.object({
		from_name: yup.string()
			.required("Rellena este campo.")
			.email("email invalido, contiene caracteres no aceptables"),
		message: yup.string().required("Rellena este campo.")
	})


	return (
		<div className={styles.contactoContainer}>
			<h1 className={styles.formTitulo}>
				<i className={styles.letter1}>conta</i><i className={styles.letter2}>ctame</i>
			</h1>
			<Formik
				validationSchema={validation}
				initialValues={initialValues}
				onSubmit={(values, { resetForm }) => {
					emailFunction(values)
					resetForm()
				}}
			>
				{({ errors }) => (
					<Form className={styles.form}>
						{errors.from_name
							&& <div className={styles.error}> {errors.from_name} </div>
						}

						<Field
							type="text"
							className={styles.emailInput}
							placeholder="tu email"
							name="from_name"
							required
						/>

						{errors.message
							&& <div className={styles.error}> {errors.message} </div>
						}

						<Field
							name="message"
							as="textarea"
							cols="30"
							rows="5"
							className={styles.messageInput}
							placeholder="tu mensaje"
							required
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
