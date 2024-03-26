import React from 'react'
import {Link} from 'react-router-dom'

function Products() {
  return (
    <div>
    <p>This is the Products page </p><Link to="/Dashboard" className="underline">Go to Dashboard</Link>
    </div>
  
  )
}

export default Products