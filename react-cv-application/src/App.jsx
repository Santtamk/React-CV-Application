import './App.css'
import NameAndAddress from './components/NameAndAddress'

function App() {
 

  return (
    <>
    <h3>Random CV Application</h3>
      <NameAndAddress smallHeading={'Name and Address'}/>
      <NameAndAddress smallHeading={'Education'}/>
      <NameAndAddress smallHeading={'Work Experience'}/>
    </>
  )
}

export default App
