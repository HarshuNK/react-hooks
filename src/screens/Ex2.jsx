import React, {useReducer} from 'react'

// reducer logic
function customReducer(state,action){
  switch(action) {
    case "inc":console.log(`inc called`)
      return { qnty : state.qnty + 1}
    break;
    case "dec":console.log(`dec called`)
      return state.qnty <= 0 ? { qnty : 1} : {qnty : state.qnty - 1}
    break;
    case 'clear': console.log(`clear called`)
      return{qnty:1}
    break;
    default:
    
  }
}
function Ex2() {
  const initState = { qnty : 1 }
  // const [state,dispacher] = useState(reducer,initialData)
  const [state,dispach] = useReducer(customReducer,initState)
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-5 text-warning">useReducer Hook</h3>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="text-dark">
              <ul>
                <li>This hook is an alternative to useState,when u have complex state logic.</li>
                <li>It take reducer function and an initial sate or data, and returns the current state dispaches function to update it</li>
                <p>const[sate,dispacher] = useReducer(reducer,initialDate)</p>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
              <h1 className="text-success">State = {state.qnty}</h1>
              <button class="btn btn-success" onClick={() => dispach('inc')}>Increment</button>
              <button class="btn btn-warning" onClick={() => dispach('dec')}>Decrement</button>
              <button class="btn btn-danger" onClick={() => dispach('clear')}>Clear</button>
          </div>
        </div>
    </div>
  )
}

export default Ex2
