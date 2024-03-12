import React from 'react'
import { Outlet } from 'react-router-dom'

function RefComp() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="display-3 text-success">Refrence Hooks</div>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default RefComp
