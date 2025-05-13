import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProductList from "./src/screens/ProductList";
import ListScreen from "./src/screens/ListScreen";
import FetchApiList from "./src/screens/FetchApiList";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import AddColorScreen from "./src/screens/AddColorScreen";
import SquareScreen from "./src/screens/SquareScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Product: ProductList,
    List: ListScreen,
    ApiList: FetchApiList,
    ImgScreen : ImageScreen,
    Counter : CounterScreen,
    Addcolor: AddColorScreen,
    SquareScreen: SquareScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
