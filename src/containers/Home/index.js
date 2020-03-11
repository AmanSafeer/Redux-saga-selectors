import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"

class Home extends Component {
  constructor() {
    super()
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
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)