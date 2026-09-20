
const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
  return sum + part.exercises
  }, 0)

  return(
    <b>total of {total} exercises</b>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

const Part = ( {part} ) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Header = ({ name }) => {
  return(
    <h1>{name}</h1>
  )
}


export default Course