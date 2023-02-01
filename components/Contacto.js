import styles from '../styles/contacto.module.scss'
import emailJS from "@emailjs/browser"
import { Field, Form, Formik } from 'formik'
import toast, { Toaster } from "react-hot-toast";

export default function Contacto() {
	const initialValues = { from_name: "", message: "" }

	const emailFunction = async (values) => {
		await emailJS.send(
			process.env.NEXT_PUBLIC_SERVICE_ID,
			process.env.NEXT_PUBLIC_TEMPLATE_ID,
			values,
			process.env.NEXT_PUBLIC_PUBLIC_KEY,
		)
			.then(() => toast.success('email sended'))
			.catch(() => toast.error('error sending email'))
	}

	return (
		<div className={styles.contactoContainer}>
			<h1 className={styles.formTitulo}>
				<i className={styles.letter1}>conta</i>
				<i className={styles.letter2}>ct me</i>
			</h1>

			<Formik
				initialValues={initialValues}
				onSubmit={(values, { resetForm }) => {
					emailFunction(values)
					resetForm()
				}}
			>
				{() => (
					<Form className={styles.form}>
						<Field
							type="email"
							className={styles.emailInput}
							placeholder="your email"
							name="from_name"
							required
						/>

						<Field
							name="message"
							as="textarea"
							cols="30"
							rows="5"
							className={styles.messageInput}
							placeholder="your message"
							required
						/>

						<button type="submit" className={styles.btnSubmit} >
							Send
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
