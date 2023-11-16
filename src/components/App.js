import React, { useState } from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Navbar from './Navbar'
import Alert from './Alert';
import About from './About';
import UserDetails from './UserDetails';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
import NotFound from './NotFound';
import Home from './Home';
/**
 * 1 - create context
 * 2- create reducer
 * 3- create state
 */

const App = () => {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar />
                    <Alert />
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route path='/about' element={<About />} />
                        <Route path="/user/:login" element={<UserDetails />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    )
}

export default App
