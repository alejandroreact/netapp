import React, {useState, useEffect} from 'react'
import UserItem from "./useritem"
import UserDetail from "./userdetail"


function UsersList(props) {

    const [users, setUsers] = useState ([])
    const [showIndex, setShowIndex] = useState (-1)
    
    function handleClick(index){
        console.log (index)
        if (showIndex===index){
            setShowIndex(-1)
        } else{
            setShowIndex(index)
        }
    }

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
            {Array.isArray(users) && users.map((userValue, index) => {
                return (
                    <UserItem key={userValue.id} user={userValue} onClick={() => handleClick(index)} />
                )
            })}
            {(showIndex>-1) && <UserDetail user={users[showIndex]}/>}
        </div>
    )

}

export default UsersList