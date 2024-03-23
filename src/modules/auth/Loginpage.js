import React from 'react'
import { Link } from 'react-router-dom'

const Loginpage = () => {
  return (
    <div className='mylogin'>
      <div className='rounded'>
          <div className='container'>
              <div className='row'>
              <div className='col-12 text-center' >
                    <h1>User Register Page</h1>
                </div>
                <div className='col-12'>
                    <label className="form-label"> Email address</label>
                    <input type='text' className='form-control' placeholder='email id'/>
                </div>
                <div className='col-12'>
                    <label className="form-label"> Password</label>
                    <input type='password' className='form-control' placeholder='password'/>
                </div>
                <div className='col-12 mt-3 text-center'>
                  <button className='btn btn-primary'>Submit</button>
                  <button className='btn btn-danger ms-2'>Cancel</button>
                  <Link to="register">New Register</Link>
                </div>
              </div> 
      </div>      
     </div>  
    </div>
  )
}

export default Loginpage