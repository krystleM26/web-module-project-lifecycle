import React from "react";

class FollowerList extends React.Component {
    render () {
        return (
            <div>
              {this.state.followerList.map(data => <div>{followers}</div>)}  
            </div>
        )
    }


}


export default FollowerList;