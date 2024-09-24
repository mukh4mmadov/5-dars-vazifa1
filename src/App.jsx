import React, { useState } from "react";
import { FaTrash } from "react-icons/fa"; 

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChangeTask(event) {
    setTask(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault();

    if (!task) {
      return;
    }

    const newTask = { task };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setTask("");
  }

  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <form className="flex items-center gap-4 mb-8">
        <input
          id="task"
          onChange={handleChangeTask}
          value={task}
          type="text"
          placeholder="Add a new task..."
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          onClick={handleAddTask}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
        >
          +
        </button>
      </form>

      <h3 className="text-xl mb-4">Tasks to do - {tasks.length}</h3>
      <div className="w-full max-w-md space-y-4">
        {tasks.map((taskItem, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <p className="flex-1">{taskItem.task}</p>
            <div className="flex items-center space-x-2">
              <button className="bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded-lg">
                Done
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
