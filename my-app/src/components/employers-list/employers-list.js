import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css'

const EmployersList = ({data}) => {

    const list = data.map(item => {
        return (
            <EmployersListItem {...item}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {list}
        </ul>
    )
}

export default EmployersList;