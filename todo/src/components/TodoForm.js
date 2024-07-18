import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <input
        type="text"
        className="flex-1 p-2 border rounded"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
