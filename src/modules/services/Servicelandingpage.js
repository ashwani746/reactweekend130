import React from 'react'
import Servicesidebar from './Servicesidebar'

const Servicelandingpage = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <Servicesidebar/>
        </div>
          <div className='col-md-9'>
            <section className='border'>
              <h1>this is the contain area</h1>
            </section>
          </div>
         </div>
    </div>
  )
}

export default Servicelandingpage