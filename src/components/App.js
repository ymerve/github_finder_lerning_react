import React, { useState } from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search';
import Alert from './Alert';
import About from './About';
import UserDetails from './UserDetails';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
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
                            element={
                                (
                                    <>
                                        <Search />
                                        <Users />
                                    </>
                                )
                            }
                        />
                        <Route path='/about' element={<About />} />
                        <Route path="/user/:login" element={<UserDetails />} />
                    </Routes>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    )
}

export default App
