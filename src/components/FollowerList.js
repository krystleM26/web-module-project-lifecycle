import React from "react";
import Follower from "./Follower";


class FollowerList extends React.Component {
    render () {
        const { followers } = this.props;
        return (
           <div>
               {
            followers && followers.map((follower,index) => {
              return (
                <div key={index} style={{ display: 'flex', flexWrap: 'wrap', width: '100px' }}>
                 <Follower  follower={follower} />
                
                </div>
              )
                }
            )
            }
           </div>
        )
    }
}


export default FollowerList;