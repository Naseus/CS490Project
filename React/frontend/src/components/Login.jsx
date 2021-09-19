import React, { useState } from 'react';
import { Redirect } from 'react-router';


function Login() {
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

  if(resp && 'key' in resp && username === 'admin') {console.log(resp); 
    window.location.replace("https://google.com/");
    <Redirect from='/' to="/Admin"/>  }

  else if(resp && 'key' in resp && username === 'user') {
    // window.location.replace("https://bing.com/");
    window.location.href = "/User";
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
              name={'username'}/>
          </div>
          <div>
            <input
              onChange={(e) => changePassword(e.target.value)}
              value={password}
              type={'password'}
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