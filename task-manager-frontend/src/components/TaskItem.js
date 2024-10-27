import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, editTask, removeTask }) => {
  const toggleStatus = () => {
    editTask(task._id, { ...task, status: task.status === 'pending' ? 'completed' : 'pending' });
  };

  return (
    <div className={`task-item ${task.status}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-actions">
        <button onClick={toggleStatus} className="complete-btn">
          {task.status === 'pending' ? 'Mark as Completed' : 'Mark as Pending'}
        </button>
        <button onClick={() => removeTask(task._id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;