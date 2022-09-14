import React from 'react'

const Sqaure = (props) => {
  return (
    <div style={{border:"5px solid black",height:"100px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",backgroundColor:"skyblue"}}  onClick={props.onClick}>
    
    <h3>{props.value}</h3>
    </div>
  )
}

export default Sqaure