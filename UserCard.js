import React from "react";

const UserCard = (props) =>{
console.log(props)
return(

    <div className='ui card'>
        <div className='content'>
            <div className="header">  {props.Header}</div>
            <div className="description">

        {props.children}
            </div>
        </div>
        <div className="ui bottom button">
            <i className="add icon"></i>
            Add friend
        </div>
    </div>
)
}


export default UserCard;