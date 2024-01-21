import { useState } from 'react'
import './App.css'
import NameAndAddress from './components/NameAndAddress'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'

function App() {
 

  return (
    <>
      <NameAndAddress/>
      <Education />
      <WorkExperience />
    </>
  )
}

export default App
