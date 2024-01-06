import React from 'react'

function Bloglayout({children}) {
  return (
    <div>
        <h1>This is a layout for all our blogs</h1>
        {children}
    </div>
  )
}

export default Bloglayout