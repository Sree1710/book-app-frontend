import React, { useState } from 'react'
import HeaderTab from './HeaderTab'
import axios from 'axios'


const SearchBook = () => {
    const [inputField, setInputField] = useState(
        { bookId: "" }
    )

    const [outputField, setOutputField] = useState(
        []
    )

    const [isLoading, setIsLoading] = useState(true)

    const apiLink = "http://localhost:3001/searchb"

    const inputHandler = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(inputField)
        axios.post(apiLink, inputField).then(
            (Response) => {
                setOutputField(Response.data)
                setIsLoading(false)
                console.log(Response.data)
            }
        )

    }

    return (
        <div>
            <HeaderTab />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>Search Books</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Book ID</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="bookId" value={inputField.bookId} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-warning">Search</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            </div>
                        </div>

                        {isLoading ? <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> : <div className="row g-3">
                            {outputField.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div className="card">
                                            <img height="400px" src={value.bookImage} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.bookName}</h5>
                                                <p className="card-text">Book ID: {value.bookId}</p>
                                                <p className="card-text">Author: {value.author}</p>
                                                <p className="card-text">Publisher and Publishing Year: {value.publisher},{value.publishYear}</p>
                                                <p className="card-text">Genre: {value.genre}</p>
                                                <p className="card-text">Stock: {value.stock}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBook