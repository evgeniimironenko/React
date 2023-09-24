import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css'

const EmployersList = ({data, onDelete}) => {
    const list = data.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem key={id} {...itemProps} onDelete={() => onDelete(id)}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {list}
        </ul>
    )
}

export default EmployersList;