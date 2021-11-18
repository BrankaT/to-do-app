/*import React from 'react';
import '../App.css';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {/*ovo je kod koji se pravi pri upotrebi state i prps*/ /*}
        {this.props.stavkeIzNizaPromjenljiva.map((elementiNiza) => (
          <TodoItem
            key={elementiNiza.id}
            drugaPromjenljivaKOjojDodjeljujemoVrijednost={elementiNiza}
            funkcijaZaMjenjanjeChackboxaProps={
              this.props.funkcijaZaMjenjanjeChackboxaProps
            }
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdate={this.setUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;*/

// import React, { useState } from 'react';
// import InputTodo from './InputTodo';

// const TodoList = (props) => {
//   return (
//     <ul>
//       {props.stavkeIzNizaPromjenljiva.map((elementiNiza) => (
//         <TodoItem
//           key={elementiNiza.id}
//           drugaPromjenljivaKOjojDodjeljujemoVrijednost={elementiNiza}
//           funkcijaZaMjenjanjeChackboxaProps={
//             props.funkcijaZaMjenjanjeChackboxaProps
//           }
//           deleteTodoProps={props.deleteTodoProps}
//           setUpdate={setUpdate}
//         />
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

import React from 'react';
import '../App.css';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
      {/*ovo je kod koji se pravi pri upotrebi state i prps*/}
      {props.stavkeIzNizaPromjenljiva.map((elementiNiza) => (
        <TodoItem
          key={elementiNiza.id}
          drugaPromjenljivaKOjojDodjeljujemoVrijednost={elementiNiza}
          funkcijaZaMjenjanjeChackboxaProps={
            props.funkcijaZaMjenjanjeChackboxaProps
          }
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
