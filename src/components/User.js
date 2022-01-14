import React from 'react'


class User extends React.Component {
    render(){
        // const { user } = login;
        const { user } = this.props
        console.log(user)
        return (
            <div className='userCard'>
                <p>Username:{user.login}</p>
                <p>Total Repos: {user.public_repos}</p>
                <p>Total Followers: {user.followers}</p>

            </div>
        )
    }
}


export default User;