import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import Logo from 'components/logo'
import { login } from 'actions/user'

@connect(state => state.user, { login })
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
  }
  handerChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handerClick() {
    this.props.login(this.state)
  }
  register() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        {this.props.redirectTo && this.props.redirectTo !== '/login' ? (
          <Redirect to={this.props.redirectTo} />
        ) : null}
        <Logo />
        <WingBlank>
          <List>
            {this.props.msg ? (
              <p className="erroe-msg">{this.props.msg}</p>
            ) : null}
            <InputItem onChange={this.handerChange.bind(this, 'user')}>
              用户
            </InputItem>
            <InputItem
              onChange={this.handerChange.bind(this, 'pwd')}
              type="password"
            >
              密码
            </InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.handerClick.bind(this)}>
            登录
          </Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register.bind(this)}>
            注册
          </Button>
        </WingBlank>
      </div>
    )
  }
}
export default Login
