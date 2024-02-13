// // components/TodoList.js
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, updateTodo, deleteTodo } from '../reducers/TodoSlice';

// const TodoList = () => {
//   const todos = useSelector(state => state.todos);
//   const dispatch = useDispatch();
//   const [text, setText] = useState('');

//   const handleAddTodo = () => {
//     if (text.trim() !== '') {
//       dispatch(addTodo({
//         id: Date.now(),
//         text,
//       }));
//       setText('');
//     }
//   };

//   const handleUpdateTodo = (id, newText) => {
//     dispatch(updateTodo({
//       id,
//       text: newText,
//     }));
//   };

//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter new todo"
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>
//             <input
//               type="text"
//               value={todo.text}
//               onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
//             />
//             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export {TodoList};
