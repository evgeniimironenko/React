import { useDispatch, useSelector } from "react-redux";
import css from "../Contacts.module.css";
import { selectContacts } from "../redux/selectors";
import { addContact } from "../redux/operations";
import { InputMask } from "@react-input/mask";
import { useState } from "react";

const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const [phone, setPhone] = useState("");

  const handleChangePhone = (e) => {
    setPhone(e.currentTarget.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.userName.value;
    const newContact = { name, phone };

    const isNameExist = items.some(
      (item) => item?.name?.toLowerCase() === name.toLowerCase()
    );

    if (isNameExist) {
      alert("Name is already exist");
      setPhone("");
      form.reset();
    } else {
      dispatch(addContact(newContact));
      setPhone("");
      form.reset();
    }
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="userName">Name</label>
      <input
        maxLength="20"
        type="text"
        name="userName"
        required
        id="userName"
      />
      <label htmlFor="userNumber">Number</label>
      <InputMask
        name="userNumber"
        required
        placeholder="+ (380) ___-___-___"
        mask="+ (380) ___-___-___"
        replacement={{ _: /\d/ }}
        onChange={handleChangePhone}
        value={phone}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
