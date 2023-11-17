import React from 'react'
import profile_img from '../img/avatars/blank.png'

const DetailsComponents = () => {
    return (
        <div className="row">
            <div className="card pb-0">
                <div className="card-body d-flex flex-wrap flex-sm-nowrap mb-3">
                    <div className="mb-4">
                        <div className="position-relative">
                            <img className="rounded" style={{ "maxWidth": "150px" }} src={profile_img} alt="profile image" />
                            <div
                                className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px">
                            </div>
                        </div>
                    </div>

                    <div className="ms-5 flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                    <a href="#" className="link-secondary link-underline-opacity-0 fs-4 fw-bolder me-1">Eric Abuzer Dean</a>
                                </div>
                                <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                                    <a href="#" className="d-flex align-items-center link-secondary link-underline-opacity-0 me-5 mb-2">
                                        <i className="fa fa-user me-1"></i> Developer
                                    </a>
                                    <a href="#" className="d-flex align-items-center link-secondary link-underline-opacity-0 me-5 mb-2">
                                        <i className="fa fa-map-marker me-1"></i> Ankara
                                    </a>
                                    <a href="#" className="d-flex align-items-center link-secondary link-underline-opacity-0 me-5 mb-2">
                                        <i className="fa fa-envelope me-1"></i> ead@spc.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <div className="container">
            <h1 className="text-secondary mt-5">About Page</h1>
            <DetailsComponents />
        </div>
    )
}

export default About
