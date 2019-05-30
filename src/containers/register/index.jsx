import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Logo from 'components/logo'
import {
  List,
  InputItem,
  Radio,
  WingBlank,
  WhiteSpace,
  Button
} from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from 'actions/user'

@connect(state => state.user, { register })
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      ped: '',
      repeatpwd: '',
      type: 'genius'
    }
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleRegister() {
    this.props.register(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
          <List>
            {this.props.msg ? (
              <p className="erroe-msg">{this.props.msg}</p>
            ) : null}
            <InputItem onChange={this.handleChange.bind(this, 'user')}>
              用户名
            </InputItem>
            <InputItem
              onChange={this.handleChange.bind(this, 'pwd')}
              type="password"
            >
              密码
            </InputItem>
            <InputItem onChange={this.handleChange.bind(this, 'repeatpwd')} type="password">
              确认密码
            </InputItem>
            <RadioItem
              onChange={this.handleChange.bind(this, 'type', 'genius')}
              checked={this.state.type === 'genius'}
            >
              牛人
            </RadioItem>
            <RadioItem
              onChange={this.handleChange.bind(this, 'type', 'boss')}
              checked={this.state.type === 'boss'}
            >
              BOSS
            </RadioItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleRegister.bind(this)}>
            注册
          </Button>
        </WingBlank>
      </div>
    )
  }
}
export default Register
