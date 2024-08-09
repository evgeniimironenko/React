const ContactList = ({ filteredContacts, handleDelete }) => (
  <ul>
    {filteredContacts.map((item) => (
      <li key={item.id}>
        {item.name}: {item.number}
        <button onClick={() => handleDelete(item.id)}>delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
