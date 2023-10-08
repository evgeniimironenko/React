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
                {name: 'Степан', salary: 9200, increase: false, rise: true, id: 1},
                {name: 'Олег', salary: 8000, increase: true, rise: false, id: 2},
                {name: 'Микола', salary: 12000, increase: false, rise: false, id: 3},
                {name: 'Вареник', salary: 9920, increase: false, rise: false, id: 4},
                {name: 'Євген', salary: 36000, increase: true, rise: false, id: 5}
            ],
            term: '',
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
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searcEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }


    render() {
        const {data, term} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searcEmp(data, term);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>
                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;