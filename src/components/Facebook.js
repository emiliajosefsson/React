import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
 import axios from "axios";


require('dotenv').config();

function Facebook() {

const [login, setLogin] = useState(false);
const [data, setData] = useState({});
const [picture, setPicture] = useState('');
const history= useHistory();
const ID = process.env.REACT_APP_FACEBOOK_APP_ID

function LogOutFacebook() {
window.FB.logout()
localStorage.clear();

window.location.reload()

}


const responseFacebook = (response) => {
 console.log(response);
     setData(response);
     localStorage.setItem("jwt", response.accessToken);
    localStorage.setItem("userFb", response.userID);
    localStorage.setItem("userInfo", "facebook");

    
     axios.get(`http://localhost:1337/open-auths?userId=${response.userID}`).then(function(openAuthData){
      const testing = openAuthData.data
      localStorage.setItem("fbId", openAuthData.data[0].id)
      console.log(testing)
    
    if(!testing[0]){
    axios
   
.post('http://localhost:1337/open-auths', {
userId: response.userID

})}
}

//     console.log(response.id)
//         axios
//        .post('http://localhost:1337/open-auths', {
//       userId: response.id
    
//      })
// .then ( response => {
//  localStorage.setItem("userInfo", response.id);
//  localStorage.setItem("userAdmin", response.admin);
  
//  }
)
          
    if (response.accessToken) {
       setLogin(true);
       console.log(response.name)
  
      
     } 
     else {
       setLogin(false);
      
      
     }
     history.push("/behandlingar")
   }

   return (
     <div className="container">
       <Card style={{ width: '600px' }}>
         <Card.Header>
           {!login &&
             <FacebookLogin
               appId={ID}
               autoLoad={true}
               fields="name,email,picture"
               scope="public_profile,email,user_friends"
               callback={responseFacebook}
               icon="fa-facebook" />
           }
           {login &&
             <Image src={picture} roundedCircle />
           }
         </Card.Header>
         {/* { login &&
           <Card.Body>
             <Card.Title>{data.name}</Card.Title>
             <Card.Text>
               {data.email}
             </Card.Text>
           </Card.Body>
         }  */}
       </Card>

     </div>
   );
 }

 export default Facebook;