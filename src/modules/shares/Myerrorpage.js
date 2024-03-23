import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Myerrorpage = () => {
  return (
    <Fragment>
        <h1 className='err'>404</h1>
        <div className='text-center'>Page Not Found</div>
        <Link to="/" className='btn btn-success btn-sm'>Back to Login </Link>
    </Fragment>
  )
}

export default Myerrorpage