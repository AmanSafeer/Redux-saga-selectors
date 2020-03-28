import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

import { Home, Dashboard } from "./containers"


const Root = createAppContainer(
  createStackNavigator({
    Home: { screen: Home },
    Dashboard: { screen: Dashboard }
  },
    {
      initialRouteName: "Home",
      headerMode: "none"
    }
  )
)

export default Root