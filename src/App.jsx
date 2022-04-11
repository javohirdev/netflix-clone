import { useState, useEffect } from 'react'
import './App.css'
import firebase from './firebase/config'
import Main from './components/Main'
import Login from './signin/Login'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  })

  return (
    <div className='app'>
      {user ? <Main user={user} /> : <Login />}
    </div>
  )
}

export default App
