import React from "react";
import { useForm } from 'react-hook-form';


export const RegistorModal =()=> {
    const mysubmit = (data) => {
        console.log(data);
    }

    const { register, handleSubmit,watch, formState:{errors}  } = useForm();

    return (
        <div className="modal fade" id="registor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> New Registration </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit(mysubmit)}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 p-1">
                               <label class="form-label">Full Name</label>
                               <input type="text" className="form-control" {...register("fullname", { required: true })} />
                               {errors.fullname && <span className="text-danger">This field is required</span>}

                            </div>
                            <div className="col-md-6 p-1">
                               <label className="form-label">Email address</label>
                               <input type="email" className="form-control" {...register("Email")}/>
                               <div for="emailHelp" className="form-text">required field</div>
                            </div>
                            <div className="col-md-6 p-1">
                               <label className="form-label">Phone No</label>
                               <input type="text" className="form-control" {...register("phonenumber", { required: true })} pattern="[1-9]{10}" />
                               {errors.phonenumber && <span className="text-danger">This field is required</span>}

                            </div>
                            <div className="col-md-6 p-1">
                               <label className="form-label">Address</label>
                               <input type="text" className="form-control" {...register("Address",{ required: true })} pattern="[^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$]"/>
                               <div className="form-text">required field</div>
                            </div>
                            <div className="col-md-6 p-1">
                               <label className="form-label">Password</label>
                               <input type="text" className="form-control" {...register("password")}/>
                               <div className="form-text">required field</div>
                            </div>
                            <div className="col-md-6 p-1">
                               <label className="form-label">User_name</label>
                               <input type="text" className="form-control"{...register("username")}/>
                               <div className="form-text">required field</div>
                            </div>
                            <div className="col-md-12 p-1">
                            <button type="submit" className="btn btn-primary">Registor</button>
                            </div>
                            
                        </div>

                    </div>
                    </form>
                </div>
                
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
    )
}