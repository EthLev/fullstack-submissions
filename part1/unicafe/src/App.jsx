import { useState } from "react";

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return(
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />


      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = (props) => (
  <button onClick = {props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => 
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>



  const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad

    if (all === 0) {
      return (
        <p>No feedback given</p>
      )
    }

    return(
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good} />
          <StatisticLine text='Neutral' value={props.neutral} />
          <StatisticLine text='Bad' value={props.bad} />
          <StatisticLine text='Total Feedback' value={all} />

          <StatisticLine text='Average Feedback:' value= {(props.good - props.bad)/ all} />
          <StatisticLine text='Positive Feedback:' value= {(props.good / all) * 100} />
        </tbody>
      </table>
    )
  }
  




export default App
