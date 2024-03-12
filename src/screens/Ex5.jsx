import React, {useState,useEffect} from 'react'

function Ex5() {

    const[num, setNum] = useState(0)

    const addVal = (val) => {
      setNum(num + val)
    }
    useEffect(() => {
        console.log(`useEffect = ${num}`)

        return () => {
            console.log(`count terminated... bye..`)
        }
      },[num])
  return (
    <div className="conatiner">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">useEffect 2</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-success">num = {num} </h1>
                <button className="btn btn-success" onClick={() => addVal(1)}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default Ex5
