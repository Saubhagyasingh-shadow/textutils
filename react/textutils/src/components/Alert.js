import React from 'react'

function Alert(props) {
  const capitalize =(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    <div style={{height:'50px'}}>
    {/* //props.alert pehle evaluate hogi agr yeh shi ho jati hai toh hum bhir dooosri value evaluate krenge  */}
{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
    {/* //yeh cross wala button tha//<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>}</div>
  )
}

export default Alert
