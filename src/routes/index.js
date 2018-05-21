import React from 'react';
import { BrowserRouter, Route , Switch} from "react-router-dom";
import Auth from './Auth';
import Login from './Login';
import Register from './Register';

  <BrowserRouter>
    <div>
    <Switch>
      <Route exact path="/login" render={props => <Login {...props}/>}/>
      <Route exact path="/register" render={props => <Register {...props}/>} />
      <Route exact path="/auth" render={props => <Auth {...props}/>} />
    </Switch>
    </div>
  </BrowserRouter>

// export default () => ();