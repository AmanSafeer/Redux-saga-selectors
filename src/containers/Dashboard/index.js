import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { connect } from "react-redux"
import { BankAction } from "../../store/actions"

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {}
  }


  render() {
    const {} = this
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 20, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", paddingVertical: 10, }}>Dashboard</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)