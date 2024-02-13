// // reducers/todoSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   todos: [],
// };

// const TodoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos.push(action.payload);
//     },
//     updateTodo: (state, action) => {
//       const { id, text } = action.payload;
//       const todoToUpdate = state.todos.find(todo => todo.id === id);
//       if (todoToUpdate) {
//         todoToUpdate.text = text;
//       }
//     },
//     deleteTodo: (state, action) => {
//       const id = action.payload;
//       state.todos = state.todos.filter(todo => todo.id !== id);
//     },
//   },
// });

// export const { addTodo, updateTodo, deleteTodo } = TodoSlice.actions;
// export default TodoSlice.reducer;
