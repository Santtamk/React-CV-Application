import { useState } from "react"


const NameAndAddress = () => {
  const [name, setName] = useState('')
  const [save, setSave] = useState(false)
  // const [edit, setEdit] = useState('')

  const cvName  = (e) => {
    setName(e.target.value)
  } 

  const editedText = () => { 
    cvName(name)
  }

  const saveAndEdit = () => { 
    // if save is clicked it has to disable the input field and show a div with the name 
    if(setSave){
      cvName()
    }else {
      editedText()
    }
    // if edit is clicked it has to show the input field . with the existing text . disable the edit button and show the save button as active 
      
  }
  return (
    <div>
      <div>
        {save ? <div>{name}</div> : <input type="text"  onChange={cvName} /> }
        {!save ? <button onClick={saveAndEdit}>Save</button> : <button onClick={saveAndEdit}>Edit</button>}
        <p>{name}</p>
      </div>
      {/* <GeneralInfo /> */}
    </div>
  )
}

export default NameAndAddress