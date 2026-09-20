import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phoneNo: '0745674300'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [phoneNo, setPhoneNo] = useState('')



  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      return alert(newName + ' is already added to the phonebook')
    }

    const personObject = { name: newName, phoneNo: phoneNo }
    console.log(personObject)
    setPersons(persons.concat(personObject))
    setNewName('')
    setPhoneNo('')
  }

  const handlePhoneNumber = (event) => {
    setPhoneNo(event.target.value)
  }





  



  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value = {newName} onChange={handleNameChange} />
          phone number: <input value = {phoneNo} onChange={handlePhoneNumber} />
        </div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.phoneNo}</p>)}

    </div>
  )
}

export default App