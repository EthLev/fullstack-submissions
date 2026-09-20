const Persons = ({ personsToShow }) => (
    <div>
        {personsToShow.map(person => <p key={person.name}>{person.name} {person.phoneNo}</p>)}
    </div>
)

export default Persons