import Button  from 'react-bootstrap/Button'
import React, { Fragment, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Myimg from '../../images/heyram.jpeg';
import Myimg2 from '../../images/sitaram.jpg'
import Myimg3 from '../../images/jayshreeram.png';
import {  AiFillAmazonCircle  } from "react-icons/ai";
import { Bs123, Bs9CircleFill } from "react-icons/bs";

const Myreactbootstrappage = () => {

  const [statevariable,statefuntion]=useState("ashwani");
  
  // const myfunc = ()=> {
  //   statefuntion("change value")
  // }

  const myfunc = (p)=> {
    console.log(p);
    statefuntion(p.target.value);
  }
  return (
    <Fragment>
      {/* <input type='text' placeholder='type to change..' value={statevariable} onClick={myfunc}/> */}
      {<input type='text' placeholder='type to change..' value={statevariable} onInput={myfunc}/>}
    <div>Myreactbootstrappage {statevariable}</div>
       <Button variant='primary'>Bootstrap button</Button>
            <Carousel>
            <Carousel.Item>
            <img src={Myimg} text="First slide" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Myimg3} text="First slide" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Myimg2} text="First slide" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <h1> react icons <Bs123 />  <Bs9CircleFill /> </h1>
            <AiFillAmazonCircle />
    </Fragment>
  )
}

export default Myreactbootstrappage