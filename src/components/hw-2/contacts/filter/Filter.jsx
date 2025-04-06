import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../redux/contactsSlice";
import { selectFilter } from "../redux/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <>
      <h2>Find contacts by name</h2>
      <input type="text" value={filter} onChange={handleChange} />
    </>
  );
};

export default Filter;
