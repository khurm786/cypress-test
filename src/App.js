import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('')
  
  return (
    <div className="App">
      <form>
      <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
      <div className='details'>{username !== '' ? (<span>{username}</span>) : (<span>Type in a name</span>)}</div> 
      </form>
    </div>
  )
}

export default App;
