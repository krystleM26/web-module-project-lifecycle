import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    render () {
        return (
            <div>
              {this.props.followerList.map(followerList =>{
                  return ( <Follower followerList={followerList} />)} 
              )};
              </div>
        
 


};
}


export default FollowerList;