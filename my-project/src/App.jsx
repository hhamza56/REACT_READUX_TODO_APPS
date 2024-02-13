import React, { useState } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
// import './styles.css'; // Import your custom CSS for styling

// Define initial state
const initialState = {
  todos: []
};

// Define todo slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload });
    },
    updateTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].text = action.payload.text;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    deleteAllTodos: (state) => {
      state.todos = [];
    }
  }
});

// Create store
const store = configureStore({
  reducer: todoSlice.reducer
});

// Extract actions
const { addTodo, updateTodo, deleteTodo, deleteAllTodos } = todoSlice.actions;

// TodoList component
const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [text, setText] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleUpdateTodo = () => {
    if (selectedTodo) {
      dispatch(updateTodo({ id: selectedTodo.id, text: text }));
      setSelectedTodo(null);
      setText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDeleteAllTodos = () => {
    dispatch(deleteAllTodos());
  };

  const handleEditTodo = (todo) => {
    setSelectedTodo(todo);
    setText(todo.text);
  };

  return (
    <div className="todo-container">
      <h1 className="title">Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new todo"
          className="todo-input"
        />
        {selectedTodo ? (
          <button onClick={handleUpdateTodo} className="update-button">Update</button>
        ) : (
          <button onClick={handleAddTodo} className="add-button">Add Todo</button>
        )}
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <input
              type="text"
              value={todo.text}
              readOnly
              className="todo-input"
            />
            <button onClick={() => handleEditTodo(todo)} className="edit-button">Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteAllTodos} className="delete-all-button">Delete All</button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
