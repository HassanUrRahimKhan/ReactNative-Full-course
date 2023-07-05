import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProductList from "./src/screens/ProductList";
import ListScreen from "./src/screens/ListScreen";
import FetchApiList from "./src/screens/FetchApiList";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Product: ProductList,
    List: ListScreen,
    ApiList: FetchApiList
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
