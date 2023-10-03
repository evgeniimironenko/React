import './app.css'
import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import SearchPanel from "../search-panel/search-panel";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Степан', salary: 9200, increase: false, id: 1},
                {name: 'Олег', salary: 8000, increase: true, id: 2},
                {name: 'Микола', salary: 12000, increase: false, id: 3},
                {name: 'Вареник', salary: 9920, increase: false, id: 4},
                {name: 'Євген', salary: 36000, increase: true, id: 5}
            ]
        };
        this.maxId = 6;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id),
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }


    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList data={data} onDelete={this.deleteItem}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;