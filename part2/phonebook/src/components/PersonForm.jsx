// components/PersonForm.jsx
const PersonForm = ({ onSubmit, nameValue, onNameChange, numberValue, onNumberChange }) => (
  <form onSubmit={onSubmit}>
    <div>name: <input value={nameValue} onChange={onNameChange} /></div>
    <div>phone number: <input value={numberValue} onChange={onNumberChange} /></div>
    <div><button type="submit">add</button></div>
  </form>
)

export default PersonForm

