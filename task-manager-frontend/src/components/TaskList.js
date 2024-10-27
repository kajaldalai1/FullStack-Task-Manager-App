import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, editTask, removeTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} editTask={editTask} removeTask={removeTask} />
      ))}
    </div>
  );
};

export default TaskList;