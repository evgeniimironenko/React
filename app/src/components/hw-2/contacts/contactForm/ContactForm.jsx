import css from "../Contacts.module.css";

const ContactForm = ({ onSubmit, inputId, numberId }) => (
  <form className={css.form} onSubmit={onSubmit}>
    <label htmlFor={inputId}>Name</label>
    <input type="text" name="userName" required id={inputId} />
    <label htmlFor={numberId}>Number</label>
    <input type="tel" name="userNumber" required id={numberId} />
    <button type="submit">add contact</button>
  </form>
);

export default ContactForm;
