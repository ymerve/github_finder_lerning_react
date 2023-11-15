import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class User extends Component {
    render() {
        const { login, avatar_url, html_url, id } = this.props.user;
        return (
            <div className="col-lg-3 col-md-4 col-sm-6" key={id}>
                <div className="card mt-2">
                    <img src={avatar_url} alt="user_image" className="img-fluid" />
                    <div className="card-body">
                        <div className="card-title">{login}</div>
                        <Link to={`/user/${login}`} className="btn btn-primary btn-sm">Go Profile</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
