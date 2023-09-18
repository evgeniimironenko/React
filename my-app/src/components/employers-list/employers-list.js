import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css'

const EmployersList = ({data}) => {

    const list = data.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem key={id} {...itemProps}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {list}
        </ul>
    )
}

export default EmployersList;