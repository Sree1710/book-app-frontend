import React, { useState } from 'react'
import HeaderTab from './HeaderTab'
import axios from 'axios'


const DeleteBook = () => {
    const [inputField,setInputField]=useState(
        {bookId:""}
    )

    const apiLink="http://localhost:3001/deleteb"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Successfully Deleted")
                    setInputField({bookId:""})
                } else {
                    alert("Something Wrong")
                }
            }
        )
    }

    return (
        <div>
            <HeaderTab/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>Delete Books</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Book ID</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="bookId" value={inputField.bookId} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-danger">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteBook