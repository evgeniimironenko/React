import { useDispatch } from "react-redux";
import css from "../Contacts.module.css";
import { deleteContact } from "../redux/operations";

export const ContactList = ({ items }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}: <b>{item.phone}</b>
          <button onClick={() => handleDelete(item.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
