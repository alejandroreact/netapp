import UsersList from './components/userslist'

function App() {

  return (
    <div className="App">
      <header className="App__header">
        <h1>Social Net App</h1>
      </header>
      <div className="App__body">
        <UsersList />
      </div>  
      <footer className="App__footer">
        <p>Social Net App {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
