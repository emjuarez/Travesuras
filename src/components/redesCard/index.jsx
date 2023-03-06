import React from 'react'
import "./styles.css"

const RedesCard = ({image, username}) => {
  return (
    <div className='redesCardMainDiv'>
        <img src={image}/>
        <p>{username}</p>
    </div>
  )
}

export default RedesCard