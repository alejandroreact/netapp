import React, {useState} from 'react'

function UsersList(props) {

    const [users, setUsers] = useState ([])

    return (
        <div className="App__users-list">
            <p>Userslist</p>
        </div>
    )

}

export default UsersList