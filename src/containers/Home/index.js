import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"
import { BankMiddleware } from "../../store/middlewares"

class Home extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.FetchUsers().next()
    // console.log("props", this.props)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Welcome to React Native</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return ({
  })
}
function mapDispatchToProps(dispatch) {
  return ({
    FetchUsers: BankMiddleware.FetchUsers
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)