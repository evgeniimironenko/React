const ContactList = ({ filteredContacts }) => (
  <ul>
    {filteredContacts.map((item) => (
      <li key={item.id}>
        {item.name}: {item.number}
      </li>
    ))}
  </ul>
);

export default ContactList;