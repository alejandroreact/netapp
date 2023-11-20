import React from 'react'

function UserItem(props) {

    return (
        <div className="App__user-item">
            <p style={{cursor: "pointer", color: 'blue'}}>{props.user.username} - {props.user.name}</p>
        </div>
    )

}

export default UserItem