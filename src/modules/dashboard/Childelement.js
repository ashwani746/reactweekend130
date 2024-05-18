import React from 'react'
import Thirdchild from './Thirdchild'

const Childelement = (props) => {
  return (
     <section className='mychild'>
         <div >Childelement {props.x} age is : {props.myage}</div>
         <Thirdchild name="singh"></Thirdchild>
     </section>
  )
}

export default Childelement