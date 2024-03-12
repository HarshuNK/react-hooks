import React from 'react'
import { Outlet } from 'react-router-dom'

function StateComp() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">State Hooks</h3>
            </div>
        </div>
        {/* display the child the components */}
        {/* withou outlet nested component will not be visible */}
        <Outlet/>
    </div>
  )
}

export default StateComp
