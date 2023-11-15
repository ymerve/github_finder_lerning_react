import React, { useState, useContext } from 'react'
import GithubContext from './context/githubContext';
/** 
class Search extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            keyword: ""
        }
    }
    onChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.state.keyword === "") {
            this.props.setAlert("Please enter key word !", "danger");
        } else {
            this.props.searchUsers(this.state.keyword);
            this.setState({
                keyword: ""
            });
        }
    }


    render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input type="text" value={this.state.keyword} onChange={this.onChange} className="form-control me-2" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-info text-light">Search</button>
                        </div>
                    </div>
                    {
                        this.props.showClearButton &&
                        <button onClick={this.props.clearUsers} className="btn btn-outline-danger btn-sm btn-block mt-2 float-end">Clear User</button>
                    }
                </form >
            </div>
        )
    }
}
*/
// state hook
const Search = ({ setAlert }) => {
    const [keyword, setKeyword] = useState('');
    const { searchUsers, clearUsers, users } = useContext(GithubContext);
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
