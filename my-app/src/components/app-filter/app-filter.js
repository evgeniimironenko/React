import './app-filter.css'

const AppFilter = ({filter, onFilterSelect}) => {
    const buttonsData = [
        {name: 'all', label: 'Всі співробітники'},
        {name: 'rise', label: 'На підвищення'},
        {name: 'moreThen10000', label: 'З/П більше 10000грн'},
    ];


    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button
                className={`btn ${clazz}`}
                type="button" key={name}
                onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        )
    })


    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;