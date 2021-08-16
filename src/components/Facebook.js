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
    setPicture(response.picture.data.url);
     localStorage.setItem("jwt", response.accessToken);
    
        axios
       .post('http://localhost:1337/auth/local/register', {
            
     email: "facebook@facebook.com",
      password: response.id,
      username: response.name,
       name: response.name
  
     })
.then ( response => {
 localStorage.setItem("userInfo", response.id);
 localStorage.setItem("userAdmin", response.admin);
  
 })
          
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