import React from 'react'

const Square = (props) => {
  return (
    <div onClick={props.onClick} className='square'>
    <h2 className='val'>{props.value}</h2></div>
  )
}

export default Square;