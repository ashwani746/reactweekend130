import React from 'react'
import { Link } from 'react-router-dom'

const Databinding = () => {
  const mydata = [
    {name:'ashwani', age:20, course:'frontend developer'},
    {name:'Ram', age:20, course:'frontend developer'},
    {name:'Khatushyam', age:20, course:'frontend developer'},
    {name:'Radhe radhe', age:20, course:'frontend developer'},
    {name:'Pranjal', age:20, course:'frontend developer'},
    {name:'Himanshu', age:20, course:'frontend developer'},
    {name:'Saurabh', age:20, course:'frontend developer'},
    {name:'Div', age:20, course:'frontend developer'}


  ]

  return (
    
    <div className='container-fluid'>
      <div className='row'>
            {mydata.map((d) =>{
              return(
                <div className='col-md-3 mt-3'>
                <div className="card bg-success">
                <div className="card-body">
                  <h5 className="card-title">{d.course}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{d.age}</h6>
                  <p className="card-text">{d.name}</p>
                  <Link href="#" className="card-link text-white">Card link</Link>
                  <Link href="#" className="card-link text-white">Another link</Link>
                </div>
              </div>
             </div>
              )
            })}
      </div>
    </div>
  )
}

export default Databinding