import React from 'react'
import axios from 'axios'
import FollowerList from './components/FollowerList'
import User from './components/User'

class App extends React.Component {
  state = {
    personalPage: 'Kryste',
    user: {
      avatar_url: 'https://avatars.githubusercontent.com/u/61578720?v=4',
      html_url: 'https://github.com/krystleM26',
      name: 'Krystle Mitchell',
      login: 'krystleM26',
      followers: 25,
      public_repos: 56,
    },
    followers: [
      {
        login: 'gamemann',
        avatar_url: 'https://avatars.githubusercontent.com/u/6509565?v=4',
        html_url: 'https://github.com/gamemann',
      },
    ],
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/krystleM26/followers')
      .then((resp) => {
        console.log(resp.data)
        this.setState({
          ...this.state,
          followers: resp.data,
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state({
        login: e.target.value,
      }),
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    const login = this.state.login

    this.setState({
      ...this.state,
      isLoading: true,
    })

    axios
      .get(`https://api.github.com/users/krystleM26/${login}/followers`)
      .then((resp) => {
        console.log(resp)
        this.setState({
          ...this.state,
          isLoading: false,
          followers: resp.data,
        })
      })
  }

  render() {
    return (
      <div>
        Github Info
        <form onSubmit={this.handleSearch}>
          <h2>Github Handle</h2>
          <input onChange={this.handleChange} />
        </form>
        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </div>
    )
  }
}

export default App
