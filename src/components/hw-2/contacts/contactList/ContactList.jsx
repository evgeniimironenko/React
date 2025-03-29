import css from "../Contacts.module.css";

const ContactList = ({ filteredContacts, handleDelete }) => (
  <ul className={css.list}>
    {filteredContacts.map((item) => (
      <li key={item.id}>
        {item.name}: <br /> {item.number}
        <button onClick={() => handleDelete(item.id)}>delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
