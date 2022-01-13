import React from 'react'


class User extends React.Component {
    render(){
        return (
            <div>
                <h2>{name}</h2>
                <p>Total Repos: {public_repos}</p>
                <p>Total Followers: {followers}</p>

            </div>
        )
    }
}


export default User;