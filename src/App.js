import React from 'react'


const users = [
  {
    avatar_url: '',
    name: 'Krystle Mitchell',
    totalRepo: 0,
    followers: [],
  },
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: users,
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
   console.log("hey i work!")

  }


  render() {
    return (
      <div>
        Github Info
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Github Handle</button>

          <input
            type="search"
            placeholder="Search"
            
          />
        </form>
        <h2></h2>
      </div>
    )
  }
}

export default App
