import styles from "../styles/formContactMe.module.css";
import emailJS from "@emailjs/browser";
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";

type Tvalues = {
  email: string;
  message: string;
};

const FormContactMe = () => {
  const initialValues = {
    email: "",
    message: "",
  };

  const handlerSubmit = async (
    values: Tvalues,
    { resetForm }: { resetForm: () => void }
  ) => {
    await emailJS
      .send(
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        values,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(() => toast.success("email sended"))
      .catch((err) => {
        console.log("err:", err);
        toast.error("error sending email");
      });

    resetForm();
  };

  return (
    <div className={styles.contactoContainer}>
      <h1 className={styles.formTitulo}>
        <i className={styles.letter1}>conta</i>
        <i className={styles.letter2}>ct me</i>
      </h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
      >
        <Form className={styles.form}>
          <Field
            type="email"
            className={styles.emailInput}
            placeholder="your email"
            name="email"
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

          <button
            type="submit"
            className={styles.btnSubmit}
          >
            Send
          </button>
        </Form>
      </Formik>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default FormContactMe;
