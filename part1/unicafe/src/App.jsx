import { useState } from "react";

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const Statistics = () => {

  }

  return(
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <h1>Statistics</h1>
      <p>
      Good: {good}<br />
      Neutral: {neutral}<br />
      Bad: {bad}<br />
      <br />
      Total Reviews: {good + neutral + bad}<br />
      Average Rating: {(good - bad)/(good + neutral + bad)}<br />
      Positive Percentage: {(good)/(good+neutral+bad)*100} %

      </p>
    </div>
  )
}


export default App