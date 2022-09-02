import './App.css';
import Form from './components/Form';
import React, { useState , useEffect} from "react";
import Todolist from './components/Display'

function App() {
  const [currentTodo, setCurrentTodo] = useState('');

  const [list, setList] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('list'));
    if (list) {
        setList(list);
    }
  }, []);

  const requestTodo = ( newTodo, newDone ) => {
    setCurrentTodo(newTodo)
    setList([...list, {"todo" : newTodo, "done" : newDone}])
    localStorage.setItem('list', JSON.stringify([ ...list, {"todo" : newTodo, "done" : newDone} ]))
  };

  const filterListFct = (deleteIdx) => { 
    const filteredList = list.filter((eachItem, i) => i !== deleteIdx) 
    setList(filteredList)
  }

  return (
    <div>
      <Form onNewTodo = {requestTodo}/>
      <Todolist todo= { currentTodo } list = {list} setList={setList} onDelete = {filterListFct}/>
    </div>
  );
}

export default App;
