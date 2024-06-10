
import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);
// normally it would be process.env , but here it is import.meta.env
console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    
    <>
      <h1>A Blog App with Appwrite</h1>
    </>
  )
}

export default App
