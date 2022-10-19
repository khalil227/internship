import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import Input from "../../Compenents/input";
import Button from "../../Compenents/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../../features/Users/usersSlice";

const SignIn = ({ user }) => {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [seePassword, setSeePassword] = useState(true);

  const Navigation = useNavigation();
  const users = useSelector((state) => state?.user.users);

  const onStartPressed = () => {
    console.log(users);
    if (!Username || !Password)
      return Alert.alert("Username et password  obligatoire");
    const userExist = users.filter(
      (user, index) =>
        user.password.toLowerCase() === Password.toLowerCase() &&
        user.username.toLowerCase() === Username.toLowerCase()
    );
    if (userExist.length === 0)
      return Alert.alert("Username or password not correct");
    // if (
    //   users.username !== Username.toLowerCase() ||
    //   users.password !== Password.toLowerCase()
    // )
    Navigation.navigate("Home");
  };
  const onSignInPressed = () => {
    Navigation.navigate("SignUp");
  };
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome back! </Text>
      <Text style={styles.text}>Username</Text>
      <Input placeholder="placeholder" value={Username} cb={setUsername} />
      <Text style={styles.text1}> Password</Text>
      <View>
        <Input
          style={StyleSheet.input}
          placeholder="placeholder"
          value={Password}
          cb={setPassword}
          secureTextEntry={seePassword}
        />
        <TouchableOpacity
          style={styles.iconn}
          onPress={() => setSeePassword(!seePassword)}
        >
          <Image
            source={
              seePassword
                ? require("../../assets/Image/eyes.png")
                : require("../../assets/Image/eyesAA.png")
            }
            style={styles.picture}
          />
        </TouchableOpacity>
      </View>
      <Button
        inverted={false}
        text="start"
        onPress={() => {
          onStartPressed();
        }}

        // {onStartPressed}
      />
      <Button inverted={true} text="sign up" onPress={onSignInPressed} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: 30,
    //paddingHorizontal: "100%",
  },
  title: {
    marginTop: 60,
    fontSize: 32,
    color: "black",
    marginVertical: 30,
    marginBottom: 186,
  },
  input: {
    width: 385,
    height: 49,
    fontSize: 20,
    borderRadius: 10,
    marginLeft: 22,
    marginVertical: 32,
  },

  text: {
    width: 97,
    height: 24,
    marginLeft: 22,
    marginVertical: 13,
    borderColor: "black",
  },
  text1: {
    width: 93,
    height: 24,
    marginLeft: 20,
    marginVertical: 13,
  },
  picture: {
    width: 30,
    height: 24,
  },
  iconn: {
    position: "absolute",
    right: 20,
    padding: 18,
  },
  //text3: {
  // width: 85,
  //height: 7,
  //maxWidth: 85,
  //marginVertical: 45,
  //marginHorizontal: 43,
  //marginTop: 23,
  //marginLeft: 127,
  //},
});
export default SignIn;
