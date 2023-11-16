import React, { useState, useContext } from 'react'
import GithubContext from './context/github/githubContext';
import AlertContext from './context/alert/alertContext';
// state hook
const Search = () => {
    const [keyword, setKeyword] = useState('');

    const { searchUsers, clearUsers, users } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);

    const onChange = (e) => {
        setKeyword(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (keyword === "") {
            setAlert("Please enter key word !", "danger");
        } else {
            searchUsers(keyword);
            setKeyword("");
        }
    }
    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={onChange} className="form-control me-2" />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-info text-light">Search</button>
                    </div>
                </div>
                {
                    (users.length > 0) &&
                    <button onClick={clearUsers} className="btn btn-outline-danger btn-sm btn-block mt-2 float-end">Clear User</button>
                }
            </form >
        </div>
    )

}

export default Search
