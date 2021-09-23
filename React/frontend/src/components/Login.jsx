import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  var resp_msg = '';

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

  if(resp) {

    if ('is_super' in resp) {
      if (resp['is_super']) {
        history.push("/admin");
      }
      else {
        history.push("/user");
      }
    }
    else {
      resp_msg = Object.values(resp);
      if (resp_msg == 'This field may not be blank.') {
        resp_msg = 'Must include "username" and "password".';
      }
    }
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
                {resp_msg} 
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