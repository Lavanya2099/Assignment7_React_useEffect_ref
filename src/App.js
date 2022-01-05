
import './App.css';
import {useState} from 'react';
import MyComponent from './components/MyComponent';
import MyRef from './refs/MyRef';
import FuncRef from './refs/FuncRef';


function App() {

  const [isRender, setisRender] = useState(true)
  return (
    <div className="App">
      <button onClick={()=>setisRender(false)}>Remove component</button>
      {isRender && <MyComponent/>}


      <MyRef/>
      <FuncRef/>
   </div>
  );
}

export default App;
