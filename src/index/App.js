import React, { Component } from "react"
import "./App/App.css"
import Goal from "./App/Goal"
import Card from "./App/Card"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: []
    }
  }

  componentDidMount = () => {
    this.randomizeGoals()
  }

  randomizeGoals = () => {
    const goals = require("./App/goals.json")

    const rows = []

    for (let i = 0; i < 5; i++) {
      const col = []
      for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 2) {
          col.push(new Goal("FREE SPACE", true))
          continue
        }
        const index = Math.floor(Math.random() * goals.length)
        col.push(new Goal(goals.splice(index, 1)[0], false))
      }
      rows.push(col)
    }

    console.log(rows)
    this.setState({
      rows
    })
  }

  checkGoal = (x, y, checked) => {
    this.setState(prevState => {
      const rows = prevState.rows
      rows[x][y].checked = checked
      return {
        rows
      }
    })
  }

  render() {

    const rows = this.state.rows.map((row, i) => (
      <div className="row" key={i}>
        {row.map((goal, j) => (<Card 
          key={goal.title} 
          checked={goal.checked} 
          title={goal.title} 
          x={i} 
          y={j}
          clickHandler={this.checkGoal}/>))}
      </div>
    ))

    return (
      <div className="App">
        {rows}
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   )
// }

export default App
