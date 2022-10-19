import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/signIn";
import SignUp from "./src/screens/SignUp";
import Home from "./src/screens/Home";
import CreateProduct from "./src/screens/CreateProduct";
import EditProduct from "./src/screens/EditProduct";
import ProductDetails from "./src/screens/ProductDetails";
import { Provider } from "react-redux";
import store from "./src/Store";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SignIn"
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateProduct" component={CreateProduct} />
          <Stack.Screen name="EditProduct" component={EditProduct} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

//const styles = StyleSheet.create({
//container: {
//flex: 1,
//backgroundColor: "#fff",
//alignItems: "center",
//justifyContent: "center",
//},
//});
export default App;
