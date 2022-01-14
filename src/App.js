import React from 'react'
import axios from 'axios'
// import FollowerList from './components/FollowerList'

class App extends React.Component {
  state = {
    followers: []
    }
  
  componentDidMount() {
    axios.get("https://api.github.com/users/krystleM26/followers")
      .then(resp=> {
        console.log(resp.data)
        this.setState({
          ...this.state,
          followers: resp.data
        
        });
        
      });
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
          {this.state.followers && this.state.followers.map(follower=> {
            return <div style={{display:'flex', flexWrap:'wrap', width:"100px"}}>
              <p>{follower.login}</p>
              <img src={follower.avatar_url} width="100" height="100" />
              </div>
          })
          }
        </div>
        {/* <FollowerList /> */}
      </div>
    )
  }
}

export default App
