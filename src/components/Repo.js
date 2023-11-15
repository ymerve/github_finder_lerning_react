import React from 'react'

const Repo = ({ repo }) => {
    return (
        <li className="list-group-item d-flex">
            <i className="fa fa-bug me-3 pt-2 text-danger"></i>
            <a href={repo.html_url}>{repo.name}</a>
        </li>
    )
}

export default Repo
