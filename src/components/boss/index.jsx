import React from 'react'
import { connect } from 'react-redux'
import { getUserList } from 'actions/chatuser'
import UserCard from 'components/usercard'

@connect(state => state.chatuser, { getUserList })
class Boss extends React.Component {
  componentDidMount() {
    this.props.getUserList('genius')
  }
  render() {
    return <UserCard userlist={this.props.userlist} />
  }
}
export default Boss
