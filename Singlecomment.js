import React from "react";



const SingleComment= (props) =>{

    console.log(props)
    return(

        <div className='comment'>
        <a href="/" className='avatar'>
            <img  src={props.picture}  alt="profile picture"></img>
        </a>
        <div className='content'>
            <a href="/" className='author'>
                {props.name}
            </a>
            <div className='metadata'>
                <span className='date ' style={{color : 'gray'}}>
                    {props.date}
                </span>
            </div>
            <div className='text'>
                {props.text}
            </div>
        </div>
    </div>

    )
}


export default SingleComment;
