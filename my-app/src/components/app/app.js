import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

function App () {

    const data = [
        {name: 'Степан', salary: 9200, increase: false},
        {name: 'Олег', salary: 8000, increase: true},
        {name: 'Микола', salary: 12000, increase: false},
        {name: 'Вареник', salary: 9920, increase: false},
        {name: 'Євген', salary: 36000, increase: true}
    ]

    return (
        <div className="app">
             <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    )
}

export default App;