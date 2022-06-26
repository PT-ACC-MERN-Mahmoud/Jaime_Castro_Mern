import React, {useState} from 'react';
import './App.css';
import Display from './components/Content';
import Form from './components/Form';

function App() {
  return (
    <div>
      <div>
        <h2>Todo List</h2>
        <h3>Add New Task:</h3>
        <Display taskList={taskList} setTaskList={setTaskList} ></Display>
      </div>
      <div>
        <h3>Pending Tasks:</h3>
        {taskList.map((task, i) => 
          <Form key={i} index = {i} taskList={taskList} setTaskList={setTaskList} ></Form>
        )}
      </div>
    </div>
  );
}

export default App;
