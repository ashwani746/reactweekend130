import axios from "axios";
import React, { useState } from "react";


const Apiaxios = () => {
  const [sv,sf] = useState([])

  const mygetapi = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      sf(res.data)
    });
  };
  return (
    <>
      <div>Apiaxios</div>
      <button className="btn btn-primary" type="button" onClick={mygetapi}>
        Axios Api
      </button>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Total:{sv.length}</h3>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#id</th>
                  <th scope="col">userId</th>
                  <th scope="col">title</th>
                  <th scope="col">completed status</th>
                </tr>
              </thead>
              <tbody>
               {
                sv.map((e)=>{        
                    return (
                        <tr key={e.id}>
                        <th scope="row">{e.id}</th>
                        <td>{e.userId}</td>
                        <td>{e.title}</td>
                        <td>{e.completed===true ? "True":"False"}</td>
                      </tr>
                    )

                })
               }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apiaxios;
