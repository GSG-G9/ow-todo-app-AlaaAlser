import React, { useState } from 'react';
import List from '../components/List';
import NewForm from '../components/NewForm';
import EditForm from '../components/EditForm';

const IndexPage = () => {
  const [newTask, setNewTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editTodos, setEditTodos] = useState([]);
  const [editTodosOriginal, setEditTodosOriginal] = useState('');
  const [completed, setCompleted] = useState(false);

  const onNewtodos = (event) => {
    setNewTask(event.target.value);
  };

  const onNewFormSubmit = (event) => {
    event.preventDefault();
    setTodos([newTask, ...todos]);
    setNewTask('');
  };

  const onDelete = (deleteItem) => {
    const deleteTask = todos.filter((item) => item !== deleteItem);
    setTodos(deleteTask);
  };

  const onComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item === todo) {
          return [...todo];
        }
        return item;
      })
    );
  };

  const onEditFormCancel = (event) => {
    event.preventDefault();
    setEditMode(false);
  };

  const onEditTodos = (event) => {
    setEditTodos(event.target.value);
  };

  const onEditFormSubmit = (event) => {
    event.preventDefault();
    const newItems = todos.map((todo) => {
      if (todo === editTodosOriginal) {
        todo = editTodos;
        setEditMode(false);
      }
      return todo;
    });
    setTodos(newItems);
  };

  const onEdit = (editItem) => {
    setEditTodos(editItem);
    setEditTodosOriginal(editItem);
    setEditMode(true);
  };

  return (
    <div>
      <style jsx>{`
        header {
          background: #fbc13f;
          margin: -10px -10px 0;
          padding: 10px;
        }

        header h1 {
          margin: 0;
          padding: 0;
        }
      `}</style>

      <header>
        <h1>To-Do List</h1>
      </header>

      {editMode ? (
        <EditForm
          onChange={onEditTodos}
          onSubmit={onEditFormSubmit}
          onCancel={onEditFormCancel}
          value={editTodos}
        />
      ) : (
        <div>
          <NewForm
            onChange={onNewtodos}
            onSubmit={onNewFormSubmit}
            value={newTask}
          />
          <List
            items={todos}
            onDelete={onDelete}
            onEdit={onEdit}
            onComplete={onComplete}
          />
        </div>
      )}
    </div>
  );
};

export default IndexPage;
