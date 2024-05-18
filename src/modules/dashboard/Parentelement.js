import React, { Fragment } from 'react'
import Childelement from './Childelement'

const Parentelement = () => {
    var a = "Learning is best key of success";
    var b = "sitaram"
    var age=26;
  return (
      <Fragment>
         <div>Parentelement : {a} </div>
         <Childelement x={b} myage={age}></Childelement>
      </Fragment>
  )
}

export default Parentelement