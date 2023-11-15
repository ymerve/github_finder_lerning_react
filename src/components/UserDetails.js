import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from './context/githubContext'
import Loading from './Loading'
import Repos from './Repos'


const UserDetails = (props) => {
    const { user, loading, repos, getUser, getUserRepos } = useContext(GithubContext);
    const { login } = useParams();
    console.log(props)
    useEffect(() => {
        getUser(login);
        getUserRepos(login);
    }, []) // [] component did mount icin [] sadece ilk yuklendiginde cagir
    const { name, avatar_url, location, html_url, bio, blog, followers, following, public_repos } = user;
    if (loading) return <Loading />
    else {
        return (
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-lg-3">
                        <div className="card">
                            <img src={avatar_url} alt="" className="card-img-top" />
                            <div className="card-body">
                                <div className="card-text">
                                    {
                                        name && <><p>{name}</p></>
                                    }
                                    {
                                        location &&
                                        <>
                                            <p><i className="fas fa-map-marker-alt"></i> {location}</p>
                                        </>
                                    }
                                    <p>
                                        <a href={html_url} className="btn btn-sm btn-block btn-warning">Go to Github Profile</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-9">
                        <div className="card">
                            <div className="card-body">
                                {
                                    bio &&
                                    <>
                                        <h3>About</h3>
                                        <p>{bio}</p>
                                    </>
                                }
                                {
                                    blog &&
                                    <>
                                        <h3>Blog</h3>
                                        <p>{blog}</p>
                                    </>
                                }
                                <div>
                                    <span className="badge bg-info m-3">followers : {followers} </span>
                                    <span className="badge bg-danger m-3">following : {following}</span>
                                    <span className="badge bg-success m-3">Public Repos : {public_repos} </span>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <Repos repos={repos} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails
