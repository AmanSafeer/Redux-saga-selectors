import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

import { Home } from "./containers"


const Root = createAppContainer(
  createStackNavigator({
    Home: { screen: Home }
  },
    {
      initialRouteName: "Home",
      headerMode: "none"
    }
  )
)

export default Root