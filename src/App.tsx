import React from 'react';
import './App.css';
import { MyButton, MyInput } from  'foxsay-ui-kit';

function App() {
  return (
    <div className="App">
      <MyButton color={"red"} big>Hello World!</MyButton>
      <MyInput big placeholder="Input some" label="Label input"/>
    </div>
  );
}

export default App;
