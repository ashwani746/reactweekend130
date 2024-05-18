import React, { Fragment, useState } from 'react'

const Registerpage = () => {
  
  const [statevariable,sfun] = useState("600");
  
  const myfunc = ()=> {
    sfun("computer")
  }

  const changeinput = (element)=>
    {
    console.log(element)
    sfun(element.target.value);
    if(statevariable==="ashwani")
      {
        console.log("says om namah shivay")
      }
  }

  return (
    <Fragment>
       <div>Registerpage</div>
       <h2>Learn Hook useState, useeffect </h2>
       <input type='text' value={statevariable} onChange={changeinput}></input>
       <h2 onClick={myfunc}>Learn : {statevariable} </h2>
    </Fragment>
  )
}

export default Registerpage