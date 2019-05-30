import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthRoute from 'components/authroute'
import Dashboard from 'components/dashboard'
import Chat from 'components/chat'
import Login from 'containers/login'
import Register from 'containers/register'
import BossInfo from 'containers/bossinfo'
import GeniusInfo from 'containers/geniusinfo'

class RouteMap extends Component {
  constructor(props) {
    super(props);
    this.state={
      hasError : false
    }
  }
  componentDidCatch(err,info){
    console.log(err,info)
    this.setState({
      hasError:true
    })
  }
  render() {
    return this.state.hasError ? 
    <h2>页面出错了</h2>:
    (
      <Router>
        <div>
          <AuthRoute />
          <Switch>
            <Route path="/bossinfo" component={BossInfo} />
            <Route path="/geniusinfo" component={GeniusInfo} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path='/chat/:user' component={Chat}></Route>
            <Route component={Dashboard}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default RouteMap
