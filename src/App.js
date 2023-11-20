import UsersList from './components/userslist'
import UserDetail from './components/userdetail'

function App() {

  return (
    <div className="App">
      <header className="App__header">
        <h1>Social Net App</h1>
      </header>
      return (
      <body className="App__body">
        <UsersList>

        </UsersList>
        <UserDetail>

        </UserDetail>
      </body>  
      <footer className="App__footer">
        <p>Social Net App {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
