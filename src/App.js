import React from 'react'
import axios from 'axios'
// import FollowerList from './components/FollowerList'

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
    e.preventDefault()
    console.log('hey i work!')
  }

  render() {
    return (
      <div>
        Github Info
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Github Handle</button>
          <input type="search" placeholder="Search" />

        </form>
        <div>
          <img src="https://avatars.githubusercontent.com/u/61578720?v=4" width="300px" />
        </div>

    
       {/* <FollowerList /> */}
      </div>
    )
  }
}

export default App
