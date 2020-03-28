import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { connect } from "react-redux"
import { BankAction } from "../../store/actions"
import { Colors } from "../../config"

class Home extends Component {
  constructor() {
    super()
    this.state = {
      userName: ""
    }
  }

  componentDidMount() {
    const {
      props: { FetchUsers }
    } = this;
    FetchUsers()
  }

  addUser = () => {
    const {
      state: { userName },
      props: { AddUser }
    } = this

    if (userName) {
      const payload = {
        login: userName,
        id: new Date().getTime()
      }
      AddUser(payload)
    }
  }

  render() {
    const {
      state: { userName },
      props: { Users, DeleteUser }
    } = this

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: 20, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", paddingVertical: 10, }}>Github Users</Text>
        <View style={{ borderBottomWidth: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 5 }}>
          <TextInput
            style={{ flex: 1, height: 50 }}
            value={userName}
            onChangeText={(userName) => this.setState({ userName })}
            placeholder="Enter User Name"
          />
          <TouchableOpacity
            onPress={this.addUser}
            style={{ padding: 8, backgroundColor: Colors.PrimaryGreen, borderRadius: 5 }}
          >
            <Text style={{ color: Colors.White }}>Add User</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive"
          style={{ width: "100%" }}
        >
          {Users && Users.map((val, ind) => {
            return (
              <View key={ind} style={{ flex: 1, paddingVertical: 20, borderBottomWidth: 1, borderColor: Colors.BlackOpacity(0.1), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ flex: 1, paddingRight:10, textAlign:"justify" }}>{val.login.toUpperCase()}</Text>
                <TouchableOpacity onPress={() => { DeleteUser(val) }} style={{ padding: 8, backgroundColor: Colors.Danger, borderRadius: 5 }}>
                  <Text style={{ color: Colors.White }}>Delete User</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return ({
    Users: state.BankReducer.users
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    FetchUsers: () => dispatch(BankAction.fetchUsers()),
    DeleteUser: (payload) => dispatch(BankAction.DeleteUser(payload)),
    AddUser: (payload) => dispatch(BankAction.AddUser(payload))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)