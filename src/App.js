import React from 'react'
import axios from 'axios'
// import FollowerList from './components/FollowerList'

class App extends React.Component {
  state = {
    userInfo: {
      avatar_url: '',
      name: 'Krystle Mitchell',
      totalRepo: 0,
      followers: [],
    },
  }
  componentDidMount(){
    axios.get("https://api.github.com/users/krystleM26/followers")
      .then(resp=> {
        console.log(resp)
      })
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     users: users,
  //   }
  // }
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
          {this.state.userInfo.followers.map(followers => {
            return 
              {userInfo}
            
          })}
        </div>
        {/* <FollowerList /> */}
      </div>
    )
  }
}

export default App
