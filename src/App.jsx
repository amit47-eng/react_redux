
import { decriment, incriment } from '../Actions/actions.js';
import {useDispatch,useSelecter} from "react-redux"
import './App.css'
import child from "./child.jsx"

function App() {

    const dispatch = useDispatch();
    const counter = useSelecter((state)=> state.counter);
    const handelIncriment = () => {
      dispatch(incriment())
    }
    const handelDecriment = () =>{
      dispatch(decriment())
    }

  return (
   <>
    <h1>LEARNIG REACT</h1>
    <h3>{counter}</h3>
    <button onClick={handelIncriment}>incriment</button>
    <button onClick={handelDecriment}></button>
   </>
  )
}

export default App
