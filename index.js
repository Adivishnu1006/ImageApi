import React from "react";
import  ReactDOM  from "react-dom";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList  from "./ImageList";
// import pics from './images/gohan1.jpg'
// import SingleComment from "./Singlecomment";
// import UserCard from "./UserCard";
// import HemisphereDisplay from "./HemisphereDisplay";

// const pp = () => {



// return(
// <div className='ui comments'>

//     <UserCard  Header = "Mark evans">
//         <div>
//             Hello this is this and this is what
//         </div>
//     </UserCard>

//     <SingleComment name= 'alex'date = 'today 5 AM' text= ' wonder ' picture = {pics}/>

//     <UserCard><SingleComment name = 'teressa' date = 'today 6 AM' text = ' Not wonder' picture = {pics} /> </UserCard>

    
//    <HemisphereDisplay Message= 'Hai'/>


// </div>
// )
// }



class App extends React.Component {
state = {images : [] }

    onSearchSubmit = async (entry) => {
        console.log(entry)
    const response = await axios.get(`https://pixabay.com/api/?key=27022462-846d53276df4fcadfd817d7e3&q=${entry}&image_type=photo`)
            this.setState({images: response.data.hits})
            console.log(response)
        }
//     constructor(props){
//         super(props)
//         this.state = {latitude : 30}

//         window.navigator.geolocation.getCurrentPosition(
//             (position) => {this.setState({position : position.coords.latitude , longitude : position.coords.longitude }) },
           
//             (error) => {this.setState({error : error.message})}
//         )};

    
    render(){
      
        return(
            <div className="ui container"  style={{marginTop : '30px'}}>
                

<SearchInput  onSearchSubmit= {this.onSearchSubmit}/>
  we have {this.state.images.length} images

  <ImageList  images = {this.state.images}/>

            </div>
        )
    }
}


ReactDOM.render(

<App/>, 
document.querySelector('#root')

)