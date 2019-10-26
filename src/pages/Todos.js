import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Todo from './../components/todos/Todo';
import TodoForm from './../components/todos/TodoForm';
import Loader from './../components/Loader';

import { ReactComponent as Plus } from './../assets/todos/plus.svg';

const exampleData = [
  {
    content: "Example content, todo some stuff",
    category: "Daily tasks",
    id: "1"
  },
  {
    content: "Example content 2, todo some stuff",
    category: "Weekly tasks",
    id: "2"
  }
];

const Todos = () => {
  const [data, setData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTodo, setActiveTodo] = useState({});

  const addTodo = todo => {
    todo.id = uuid();
    const newTodos = [...data, todo];

    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    setData(newTodos);
    setIsFormVisible(false);
  };

  const editTodo = todo => {
    const newTodos = data;
    const foundIndex = data.findIndex(x => x.id === todo.id);
    newTodos[foundIndex] = todo;

    localStorage.setItem('todos', JSON.stringify(newTodos));

    setData(newTodos);
    setIsFormVisible(false);
  };

  const removeTodo = removedTodo => {
    const newTodos = data.filter(todo => todo.id !== removedTodo.id);

    localStorage.setItem('todos', JSON.stringify(newTodos));
    setData(newTodos);
  };

  const toggleTodoForm = todo => {
    setActiveTodo(todo);
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    const todos = localStorage.getItem('todos');
    console.log(todos);
    if (todos !== null) {
      setData(JSON.parse(todos));
    } else {
      setData(exampleData);
    }
    setIsLoading(false);
  }, []);

  const onDragEnd = result => {
    console.log(result);
  };

  return (
    <div className="content">
      <h3>Todos</h3>
      {isLoading ? <Loader /> : (
        isFormVisible ? <TodoForm addTodo={addTodo} editTodo={editTodo} todo={activeTodo} /> : (
          // <DragDropContext onDragEnd={onDragEnd}>
          //   <Droppable droppableId="list">
              <div className="todos">
                {data.map((todo, key) => (
                  <Todo
                    data={todo}
                    key={key}
                    toggleTodoForm={() => toggleTodoForm(todo)}
                    removeTodo={() => removeTodo(todo)} />
                ))}
              </div>
          //   </Droppable>
          // </DragDropContext>
        )
      )}
      <div className={isFormVisible ? `todo-add active` : `todo-add`} onClick={() => toggleTodoForm({})}>
        <Plus />
      </div>
    </div>
  );
}

export default Todos;