import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeaderTab from './HeaderTab'


const ViewBook = () => {
    const [bookData, setBookData] = useState(
        []
    )

    const apiLink = "http://localhost:3001/viewb"

    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        axios.get(apiLink).then(
            (Response) => {
                setBookData(Response.data)
                setIsLoading(false)
            }
        )
    }

    useEffect(() => { getData() }, [])

    return (
        <div>
            <HeaderTab/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>View Book</h1>
                        </div>
                        {isLoading ? <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> : <div className="row g-3">

                            {bookData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex align-items-stretch">
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

export default ViewBook