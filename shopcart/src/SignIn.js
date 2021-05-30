import './App.css';
import React, { useState } from "react";
import FacebookLogin from 'react-facebook-login';
import CheckOut from "./CheckOut";
import { Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function SignIn() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div className="container">
      <Card style={{ width: '800px', margin: '20px' }} className="mx-auto mt-5">
        <Card.Header className="pb-4">
          <h1>Sign In</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {!login &&
              <React.Fragment>
                <h3>Please login using one of the following:</h3>
                <LoginForm />
                <FacebookLogin
                  appId="250811276819517"
                  autoLoad={false}
                  fields="name, email, picture"
                  scope="public_profile, user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook" />
              </React.Fragment>
            }
            {login &&
              <CheckOut fbpic={picture} fbdata={data} />
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function LoginForm() {
  return (
    <form className="border mt-3 mb-5 p-3 bg-white">
      <label className="m-2">Name:</label>
      <input type="text" name="name" placeholder="Your Name" />
      <label className="m-2">Email:</label>
      <input type="email" name="email" placeholder="Your Email" />
      <button type="submit" value="Login" className="btn bg-success text-white my-3">Login</button>
    </form>
  )
}

export default SignIn;
