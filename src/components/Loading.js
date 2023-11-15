import React from 'react'
import loading from "../img/loading.gif"

const Loading = () => {
    return (
        <React.Fragment>
            <img src={loading} alt="loading..." style={{ width: "50%", display: "block", margin: "auto" }} />
        </React.Fragment>
    )
}

export default Loading
