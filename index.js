import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';


const App = () => {
  const [aTodo, setaTodo] = useState('')
  const [todoList, settodoList] = useState([]);
  const [editActive, seteditActive] = useState(false);

  const handleSubmit=(e)=> {
    e.preventDefault();
    if(!editActive) {
      let val ={ name: aTodo, id: todoList.length+1}
      settodoList([...todoList,val]);
      setaTodo('')
    } else {
      edittheTodo()
    }
  }

  const removeaTodo = (id) => {
    let filterData = todoList.filter( t => t.id != id)
    settodoList(filterData)
  }

  const editaTodo = (name,id) => {
    setaTodo(name)
    seteditActive(id)
  }

  const edittheTodo = () => {
    let editedTodo = todoList.map(x => {
      if(x.id == editActive) {
        x.name = aTodo
      }
      return x
    })
    seteditActive(false);
    settodoList(editedTodo);
    setaTodo('')
  }

  return (
    <>
    <h2 style={{color:'white'}}>Todo App</h2>
    <div className="todoApp">
      <form className="todo_form" onSubmit={(e) => handleSubmit(e)}>
        <input type='text' value={aTodo} onChange={(e) => setaTodo(e.target.value)}/>
        <button className="addTodo" type="submit">Add Todo</button>
      </form>
      {todoList.map((todo) => {return <span className="todo_data">{todo.name}
      <button className='btn' onClick={(e)=> editaTodo(todo.name,todo.id)}>Edit</button>
      <button  className='btn' onClick={(e)=> removeaTodo(todo.id)}>x</button>
      </span>})}
    </div>
    </>
  )
}

render(<App />, document.getElementById('root'));
