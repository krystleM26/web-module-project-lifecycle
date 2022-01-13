import React from 'react'

class Follower extends React.Component {
  render() {
    return (
      <div>
        <img src="https://api.github.com/users/krystleM26/followers" />
        Name: {name}
      </div>
    )
  }
}

export default Follower
