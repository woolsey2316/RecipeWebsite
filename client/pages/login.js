import React, {useState, useContext} from 'react';
import AuthService from '../services/AuthService';
import Message from '../components/Message';
import { AuthContext } from '../context/AuthContext';

const Login = props => {
  const [user, setUser] = useState({username: "", password: ""});
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = e => {
    setUser({...user,[e.target.name]: e.target.value});
  }

  const onSubmit = e => {
    e.preventDefault();
    AuthService.login(user).then(data => {
      console.log(data);
      const {isAuthenticated, user, message} = data;
      if (isAuthenticated) {
        authContext.dispatch({payload: user, type: "LOGIN"})
        props.history.push('/todos')
      } else {
        setMessage(message);
      }
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Please sign in</h3>
        <label htmlFor="username" >Username: </label>
        <input type="text"
              name="username"
              onChange={onChange}
              placeholder="Enter Username"/>
        <label htmlFor="password">Password:</label>
        <input type="password"
              name="password"
              onChange={onChange}
              placeholder="Enter Password"/>
        <button type="submit">Log in</button>
      </form>
      {message ? <Message message={message}/> : null}
    </div>
  )
}

export default Login