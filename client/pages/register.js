import React, {useState, useRef, useEffect} from 'react';
import AuthService from '../services/AuthService';
import Message from '../components/Message';

const Register = props => {
  const [user, setUser] = useState({username: "", password: "", role: ""});
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    }
  },[]);

  const onChange = e => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const resetForm = () => {
    setUser({username: "", password: "", role: ""});
  }

  const onSubmit = e => {
    e.preventDefault();
    AuthService.register(user).then(data => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push('/login')
        },2000)
      }
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Please Register</h3>
        <label htmlFor="username">Username: </label>
        <input type="text"
              name="username"
              value={user.username}
              onChange={onChange}
              placeholder="Enter Username"/>
        <label htmlFor="password">Password: </label>
        <input type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              plaveholder="Enter Password" />
        <label htmlFor="role" >Role: </label>
        <input type="text"
              name="role"
              value={user.role}
              onChange={onChange}
              plaveholder="Enter role (admin/user)"/>
        <button type="submit">Register</button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  )
}

export default Register