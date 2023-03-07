import React from 'react'
import "./styles.css"

const Flavors = ({children}) => {
  return (
    <div className='flavorsMainDiv'>
        {children}
    </div>
  )
}

export default Flavors