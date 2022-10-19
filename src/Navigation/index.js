import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "../screens/signUp";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import CreateProduct from "../screens/CreateProduct";
import EditProduct from "../screens/EditProduct";
import ProductDetails from "../screens/ProductDetails";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SignUp"
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateProduct" component={CreateProduct} />
        <Stack.Screen name="EditProduct" component={EditProduct} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
// import React, { useState } from "react";
// import { Text, StyleSheet, SafeAreaView, Alert } from "react-native";
// import Input from "../../Compenents/input";
// import Button from "../../Compenents/Button";
// import { useNavigation } from "@react-navigation/native";
// import { useDispatch, useSelector } from "react-redux";
// import { addUsers } from "../../features/Users/usersSlice";

// const SignUp = () => {
//   const [Username, setUsername] = useState("soulef");
//   const [Password, setPassword] = useState("pppp");
//   const Navigation = useNavigation();
//   const users = useSelector((state) => state?.user.users);

//   const onStartPressed = () => {
//     // console.log(users.password, users.username);
//     if (!Username || !Password)
//       return Alert.alert("Username et password  obligatoire");
//     const userExist = users.filter(
//       (user, index) => user.password === Password && user.username === Username
//     );

//     if (userExist.length === 0)
//       return Alert.alert("Username or password not correct");
//     Navigation.navigate("Home");
//   };
//   const onSignInPressed = () => {
//     Navigation.navigate("SignIn");
//   };
//   const dispatch = useDispatch();

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Welcome back! </Text>
//       <Text style={styles.text}>Username</Text>
//       <Input placeholder="placeholder" value={Username} cb={setUsername} />
//       <Text style={styles.text1}> Password</Text>
//       <Input
//         style={StyleSheet.input}
//         placeholder="placeholder"
//         value={Password}
//         cb={setPassword}
//         secureTextEntry={true}
//       />
//       <Button
//         inverted={false}
//         text="start"
//         onPress={() => {
//           onStartPressed();
//         }}

//         // {onStartPressed}
//       />
//       <Button inverted={true} text="sign in" onPress={onSignInPressed} />
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: "white",
//     paddingTop: 30,
//     //paddingHorizontal: "100%",
//   },
//   title: {
//     marginTop: 60,
//     fontSize: 32,
//     color: "black",
//     marginVertical: 30,
//     marginBottom: 186,
//   },
//   input: {
//     width: 385,
//     height: 49,
//     fontSize: 20,
//     borderRadius: 10,
//     marginLeft: 22,
//     marginVertical: 32,
//   },

//   text: {
//     width: 97,
//     height: 24,
//     marginLeft: 22,
//     marginVertical: 13,
//     borderColor: "black",
//   },
//   text1: {
//     width: 93,
//     height: 24,
//     marginLeft: 20,
//     marginVertical: 13,
//   },
//   //text3: {
//   // width: 85,
//   //height: 7,
//   //maxWidth: 85,
//   //marginVertical: 45,
//   //marginHorizontal: 43,
//   //marginTop: 23,
//   //marginLeft: 127,
//   //},
// });
// export default SignUp;
