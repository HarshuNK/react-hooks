import React from 'react'
import { Outlet } from 'react-router-dom'

function PerformComp() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="display-3 text-success">Performance Hooks</div>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default PerformComp
