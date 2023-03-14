import React from 'react'
import "./styles.css"

const RedesCard = ({image, username, color}) => {
  return (
    <div className='redesCardMainDiv'>
        <img src={image}/>
        <p style={{color: color}}>{username}</p>
    </div>
  )
}

export default RedesCard