// import React from 'react';
// import '../App.css';
// import Header from './Header';
// import InputTodo from './InputTodo';
// import Navbar from './Navbar';
// import TodoList from './TodoList';
// import { v4 as uuidv4 } from 'uuid';

// class TodoContainer extends React.Component {
//   state = {
//     komponenteObjekta: [],
//   };
//   funkcijaZaMjenjanjeChackboxa = (id) => {
//     this.setState({
//       komponenteObjekta: this.state.komponenteObjekta.map((element) => {
//         if (element.id === id) {
//           element.completed = !element.completed;
//         }
//         return element;
//       }),
//     });
//   };

//   delTodo = (id) => {
//     this.setState({
//       komponenteObjekta: [
//         ...this.state.komponenteObjekta.filter((todo) => {
//           return todo.id != id;
//         }),
//       ],
//     });
//   };

//   addTodoItem = (title) => {
//     const newTodo = {
//       id: uuidv4(),
//       title: title,
//       completed: false,
//     };
//     this.setState({
//       komponenteObjekta: [...this.state.komponenteObjekta, newTodo],
//     });
//   };

//   setUpdate = (updatedTitle, id) => {
//     this.setState({
//       komponenteObjekta: this.state.komponenteObjekta.map((todo) => {
//         if (todo.id === id) {
//           todo.title = updatedTitle;
//         }
//         return todo;
//       }),
//     });
//   };
//   /* componentDidMount() {
//     fetch('https:jsonplaceholder.typicode.com/todos?_limit=10')
//       .then((response) => response.json())
//       .then((data) => this.setState({ komponenteObjekta: data }));
//   }* na ovaj način dobijamo podatke sa bekenda*/

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.komponenteObjekta !== this.state.komponenteObjekta) {
//       const temp = JSON.stringify(this.state.komponenteObjekta);
//       localStorage.setItem('komponenteObjekta', temp);
//     }
//   }
//   componentDidMount() {
//     const temp = localStorage.getItem('komponenteObjekta');
//     const loadedTodos = JSON.parse(temp);
//     if (loadedTodos) {
//       this.setState({
//         komponenteObjekta: loadedTodos,
//       });
//     }
//   }
//   render() {
//     return (
//       <div className="container">
//         <div className="inner">
//           <Header />
//           <InputTodo addTodoProps={this.addTodoItem} />
//           <TodoList
//             stavkeIzNizaPromjenljiva={this.state.komponenteObjekta}
//             funkcijaZaMjenjanjeChackboxaProps={
//               this.funkcijaZaMjenjanjeChackboxa
//             }
//             deleteTodoProps={this.delTodo}
//             setUpdate={this.setUpdate}
//           />
//         </div>

//         {/*ovo je kod koji se pravi pri upotrebi state i prps*/}
//       </div>
//     );
//   }
// }

// export default TodoContainer;

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
