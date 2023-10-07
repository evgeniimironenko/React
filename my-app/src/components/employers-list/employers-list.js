import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css'

const EmployersList = ({data, onDelete, onToggleProp}) => {
    const list = data.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem
                key={id} {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    });

    return (
        <ul className="app-list list-group">
            {list}
        </ul>
    )
}

export default EmployersList;