import React from "react";
import {useDispatch, useSelector} from "react-redux"

import {inc,dec} from "./redux/slices/CounterSlice"

const App = () => {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(dec())}>DEC</button>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(inc())}>INC</button>
    </div>
  );
};

export default App;
