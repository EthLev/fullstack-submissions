import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phoneNo: '0745674300'
    }
  ])
  const [newName, setNewName] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
      <Filter value={searchTerm} onChange={handleSearchChange} />

      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        onNameChange={handleNameChange}
        numberValue={phoneNo}
        onNumberChange={handlePhoneNumber}
      />
    </div>
  )
}

export default App