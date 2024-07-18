import React from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <div className="flex justify-between items-center p-2 border rounded bg-gray-100">
      <span
        className={`flex-1 ${todo.isCompleted ? 'line-through' : ''}`}
        onClick={() => toggleTodo(index)}
      >
        {todo.text}
      </span>
      <button
        className="ml-2 p-1 text-red-500 hover:text-red-700"
        onClick={() => removeTodo(index)}
      >
        x
      </button>
    </div>
  );
}

export default TodoItem;
