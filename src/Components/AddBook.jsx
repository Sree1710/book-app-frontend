import axios from 'axios'
import React, { useState } from 'react'
import HeaderTab from './HeaderTab'


const AddBook = () => {
    const [inputField,setInputField]=useState(
        {bookId:"",bookName:"",bookImage:"",author:"",publisher:"",publishYear:"",genre:"",stock:""}
    )

    const apiLink="http://localhost:3001/addb"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Successfully Inserted")
                    setInputField({bookId:"",bookName:"",bookImage:"",author:"",publisher:"",publishYear:"",genre:"",stock:""})
                } else {
                    alert("Something went wrong")
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
                            <h1>Add Books</h1>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Book ID</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="bookId" value={inputField.bookId} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Book Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="bookName" value={inputField.bookName} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Image</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="bookImage" value={inputField.bookImage} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Author</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="author" value={inputField.author} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Publisher</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="publisher" value={inputField.publisher} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Publishing Year</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="publishYear" value={inputField.publishYear} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Genre</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="genre" value={inputField.genre} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Stock</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="stock" value={inputField.stock} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBook