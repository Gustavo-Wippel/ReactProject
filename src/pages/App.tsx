import React from 'react';
import FormTasks from '../components/form';
import List from '../components/List'
import './style.scss';


function App() {
  return (
    <div className="AppStyle">
      <FormTasks></FormTasks>
      <List></List>
    </div>
  );
}


export default App;
