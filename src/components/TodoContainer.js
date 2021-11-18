import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import InputTodo from './InputTodo';
import Navbar from './Navbar';
import TodoList from './TodoList';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import About from '../pages/About';
import NotMach from '../pages/NotMatch';

const TodoContainer = () => {
  const [komponenteObjekta, setKomponenteObjekta] = useState(getInitialTodos());

  const funkcijaZaMjenjanjeChackboxa = (id) => {
    setKomponenteObjekta([
      komponenteObjekta.map((element) => {
        if (element.id === id) {
          element.completed = !element.completed;
        }
        return element;
      }),
    ]);
  };

  const delTodo = (id) => {
    setKomponenteObjekta([
      ...komponenteObjekta.filter((todo) => {
        return todo.id != id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setKomponenteObjekta([...komponenteObjekta, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setKomponenteObjekta(
      komponenteObjekta.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  /*useEffect(() => {
    console.log('test run');

    const temp = localStorage.getItem('komponenteObjekta');
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setKomponenteObjekta(loadedTodos);
    }
  }, []);*/

  function getInitialTodos() {
    const temp = localStorage.getItem('komponenteObjekta');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    const temp = JSON.stringify(komponenteObjekta);
    localStorage.setItem('komponenteObjekta', temp);
  }, [komponenteObjekta]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodoList
                stavkeIzNizaPromjenljiva={komponenteObjekta}
                funkcijaZaMjenjanjeChackboxaProps={funkcijaZaMjenjanjeChackboxa}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMach />
        </Route>
      </Switch>
    </>
  );
};
export default TodoContainer;
