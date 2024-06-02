import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvide'
import Login from './components/Login'
import Profile from './components/Profile'
function App() { 
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Context API in React</h1>
     <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
