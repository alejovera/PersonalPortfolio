import React from 'react';
import App from './App';
import Pdf from '../components/Pdf';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class Main extends React.Component {  
  render(){
    return(
      <div className='container-fluid big_container'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pdf">
              <Pdf />
            </Route>
            <Route exact path="/">
              <App />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Main;
