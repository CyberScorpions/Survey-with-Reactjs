import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

function LikeBtn (props) {
  const [value, setValue] = useState(0)
  function addOne(){
    setValue(value + 1)
  }
  return <button onClick={addOne}>Like {value}</button>
}


function App (props) {
    

    return <div>
      <LikeBtn />

      <LikeBtn />

      <LikeBtn />

      <LikeBtn />
    </div>

}

export default App;
