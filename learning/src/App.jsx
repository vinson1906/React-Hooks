


import './App.css'
import Results from './components/resultpage/Results'
import Studentlogin from './components/studentlogin/Studentlogin'
import {Route,Routes} from 'react-router-dom'
import { AuthenticationTitle } from './components/teacherslogin/AuthenticationTitle'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Studentlogin />}/>
      <Route path='/Studentresult' element={<Results />}/>
      <Route path='/Teacherlogin' element={<AuthenticationTitle />}/>
    </Routes>
     
    </>
  )
}

export default App
