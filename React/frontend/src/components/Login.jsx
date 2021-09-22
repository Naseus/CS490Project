import React, { useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [ resp, changeResponse ] = useState(null);
  const [ username, changeUsername ] =  useState('');
  const [ password, changePassword ] =  useState('');

  function onSubmit(e) {
     e.preventDefault();
    return fetch('http://localhost:8000/auth/login/', {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body:  JSON.stringify({username, password})
    }).then(resp => resp.json()).then(data => {
      changeResponse(data)
    }).catch(error => console.log('error ->', error))
  }

  function handleClick(e, location) {
    e.preventDefault();
    <Redirect from='' to="$location" />
  }

  if(resp && 'key' in resp && username === 'admin') {
    console.log(resp); 
    history.push("/administrator");
  }

  else if(resp && 'key' in resp && username === 'user') {
     history.push("/user");
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Login
        </h1>
    
        <div>
          {resp &&
            <div className={'response'}>
              <code>
                {JSON.stringify(resp)} 
              </code>
            </div>
          }
        </div>
        <div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              onChange={(e) => changeUsername(e.target.value)}
              value={username}
              type={'input'}
              placeholder={'Username'}
              name={'username'}/>
          </div>
          <div>
            <input
              onChange={(e) => changePassword(e.target.value)}
              value={password}
              type={'password'}
              placeholder={'Password'}
              name={'password'}/>
          </div>
          <button type={'submit'}>Login</button>   
        </form>
        </div>
      </header>
    </div>
  );
}

export default Login;