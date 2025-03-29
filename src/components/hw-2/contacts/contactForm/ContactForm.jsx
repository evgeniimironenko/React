import css from "../Contacts.module.css";
import { InputMask } from "@react-input/mask";

const ContactForm = ({ onSubmit, inputId, numberId }) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label htmlFor={inputId}>Name</label>
      <input maxLength="20" type="text" name="userName" required id={inputId} />
      <label htmlFor={numberId}>Number</label>
      <InputMask
        name="userNumber"
        required
        placeholder="+ (380) ___-___-___"
        mask="+ (380) ___-___-___"
        replacement={{ _: /\d/ }}
      />
      <button type="submit">add contact</button>
    </form>
  );
};

export default ContactForm;
