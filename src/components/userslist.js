import React, {useState, useEffect} from 'react'

function UsersList(props) {

    const [users, setUsers] = useState ([])

    async function loadData (controller) {
        const fullApiUrl = "https://jsonplaceholder.typicode.com/users/"
        //GET request to server
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'},
            signal: controller.signal
        }
        try {
          const response = await fetch(fullApiUrl, requestOptions)
          const dataUsers = await response.json()
          setUsers (dataUsers);
        }
        catch (error) {
          if (error.name !== "AbortError") {
            console.error ('Load ERROR: ', error)
          }
          return //exits the function
        }
    }

    useEffect(() => { 
        const controller = new AbortController()
        loadData(controller);
        return () => {controller.abort()}
    },[]);
    
   
    return (
        <div className="App__users-list">
            <h2>Users list</h2>

            {Array.isArray(users) && users.map((userValue) => {
                return (
                    <div key={userValue.id}>
                        <p>{userValue.username} - {userValue.name}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default UsersList