import React, { useState } from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
    useParams
} from 'react-router-dom';
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search';
import Alert from './Alert';
import About from './About';
import UserDetails from './UserDetails';
import GithubState from './context/githubState';
/**
 * 1 - create context
 * 2- create reducer
 * 3- create state
 */

const App = () => {
    const [alert, setAlert] = useState(null);

    const showAlert = (msg, type) => {
        setAlert({ msg, type })
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    }

    return (
        <GithubState>
            <BrowserRouter>
                <Navbar />
                <Alert alert={alert} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            (
                                <>
                                    <Search setAlert={showAlert} />
                                    <Users />
                                </>
                            )
                        }
                    />
                    <Route path='/about' element={<About />} />
                    <Route path="/user/:login" element={<UserDetails />} />
                </Routes>
            </BrowserRouter>
        </GithubState>
    )
}

export default App
