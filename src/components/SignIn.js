import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

function SignIn() {

        const initialValue = {
        email:" ",
        password:""
        }  
        
        const [signInValues, setSignInValues] = useState(initialValue);
        const [authenticated, setAuthenticated] = useState(false);
        const [error, setError]= useState("")
        
        function onHandleChange(e){

          setSignInValues( {
              ...signInValues,
              [e.target.name]:e.target.value
                 
              })
              }


        function onHandleSubmit(e){
        e.preventDefault();
        
        axios.post('http://localhost:1337/auth/local', {
          identifier: signInValues.email,
          password: signInValues.password,
        })

        .then(response => {
          // Handle success.
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
          setAuthenticated(true);
        })
        
        .catch( (err)=>{
          console.log(err); 
        
        setError(err.response.message[0].messages[0].message)
       })
      }

    return (
      <>
      {authenticated ? <div>Välkommen</div> :
       <form onSubmit={onHandleSubmit}>
        <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            
                <h2 className="text-center text-3xl font-extrabold text-pink-700">Logga in</h2>
                <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email</label>
          <input value={signInValues.email} onChange={onHandleChange} name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Mejladress"/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Lösenord</label>
          <input value={signInValues.password} onChange={onHandleChange} name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm" placeholder="Lösenord"/>
        </div>
            </div>
            
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-900">Logga in</button>
            <h2 className="text-red-900">{error}</h2>
            
            <div className="text-sm">
          <Link className="font-medium text-pink-500 hover:text-pink-700" to="/skapa-konto">
            Har du inte redan ett konto?
            </Link>
        </div>
       
        </div>
        </div>
        </form>
        }
        </>
    )
}

export default SignIn


