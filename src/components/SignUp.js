import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import axios from "axios";


function SignUp() {


  const initialValue = {
    email:"",
    username: "",
    password:"",
    name:"",
    birthday:""
    }  
    
    const [signUpValues, setSignUpValues] = useState(initialValue)
    const [error, setError]= useState("")

  const history= useHistory();

    function onHandleChange(e){

      setSignUpValues( {
          ...signUpValues,
          [e.target.name]:e.target.value
             
          })
          }
    
    
    function onHandleSubmit(e){
    e.preventDefault();
    axios
    .post('http://localhost:1337/auth/local/register', {

          email: signUpValues.email,
          password: signUpValues.password,
          username: signUpValues.username,
          birthday: signUpValues.birthday,
          name: signUpValues.name

         })
    .then ( history.push("/logga-in"))

    .catch((err)=> {setError(err.response.data.message[0].messages[0].message)})
    }
    
    return (
      <form onSubmit={onHandleSubmit}>
        <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="text-center text-3xl font-extrabold text-pink-700">Skapa konto</h2>
                <h2 className="text-black">{error}</h2>
                <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email</label>
          <input value={signUpValues.email} onChange={onHandleChange}  name="email" type="email" autoComplete="email"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Mejladress"/>
        </div>
        <div>
          <label htmlFor="name" className="sr-only">Namn</label>
          <input value={signUpValues.name} onChange={onHandleChange} name="name" type="text"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Namn"/>
        </div>
        <div>
          <label htmlFor="username" className="sr-only">Användarnamn</label>
          <input value={signUpValues.username} 
          onChange={onHandleChange} 
          name="username" 
          type="text"  
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" 
          placeholder="Användarnamn"/>
        </div>
        <div>
          <label htmlFor="birthday" className="sr-only">Födelsedag</label>
          <input value={signUpValues.birthday} onChange={onHandleChange} name="birthday" type="date"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Födelsedag"/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Lösenord</label>
          <input value={signUpValues.password} onChange={onHandleChange} name="password" type="password" autoComplete="current-password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-b-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Lösenord"/>
        </div>
        
        </div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-900">Skapa konto</button>
         
            <div className="text-sm">
          <Link className="font-medium text-pink-500 hover:text-pink-700" to="/logga-in">
            Har du redan ett konto?
            </Link>
            
        </div>
        
        </div>
        
        </div>
        </form>
  
    )
}

export default SignUp