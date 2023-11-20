import React from 'react'
import AlbumList from "./albumlist"

function UserDetail(props) {

    return (
        <div className="App__user-detail">
            <h2>User Detail: {props.user.username} - {props.user.name}</h2>
            <AlbumList>

            </AlbumList>
        </div>
    )

}

export default UserDetail