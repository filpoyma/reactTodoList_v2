import React from 'react';
import ReactDOM from 'react-dom';
import idGenerator from 'react-id-generator';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearcPanel';
import ToDoList from './components/ToDoList';

const App = () => {

    const todoData = [
        {label: 'Drink Cofee', important: false, id: idGenerator()},
        {label: 'Drink Tea',   important: true,  id: idGenerator()},
        {label: 'Drink Vodka', important: false, id: idGenerator()},
        ];

    //let isLog = false;
    //const login = <span>Please login</span>;
    return (
        <div>
            {/*{isLog ? null : login}*/}
            <AppHeader />
            <SearchPanel />
            <ToDoList todos={todoData}/>
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
