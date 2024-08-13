const Filter = ({ filter, handleChange }) => (
  <>
    <p>find contacts by name</p>
    <input type="text" value={filter} onChange={handleChange} />
  </>
);

export default Filter;
