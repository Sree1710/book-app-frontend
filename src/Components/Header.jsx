import React from 'react'

const header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Books App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/addb">Add Books</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/viewb">View Books</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/searchb">Search Books</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/deleteb">Delete Books</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default header