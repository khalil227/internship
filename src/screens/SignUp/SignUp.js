import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Input from "../../Compenents/input";
import Button from "../../Compenents/Button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../../features/Users/usersSlice";
const SignUp = () => {
  const [Username, setUsername] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmpassword] = useState();
  const [seePassword, setSeePassword] = useState(true);
  const [checkEmail, setCheckEmail] = useState(false);
  const users = useSelector((state) => state?.user?.users);
  console.log("====================================");
  console.log(users);
  console.log("====================================");
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  const onStartPressed = () => {
    //Navigation.navigate("SignUp");
  };
  const onSignInPressed = () => {
    Navigation.navigate("SignIn");
  };
  const handlEmail = (text) => {
    const re = /\\S+@\S+\\.\\S+/;
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (regex.test(text) || re.test(text)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
  };
  const checkPasswordValidation = (value) => {
    const isWhiteSpace = /^\S*$/;
    if (!isWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return "Password must contain at least one Number.";
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return "Password must be 8-16 Characters Long.";
    }

    return null;
  };

  const handleLogin = () => {
    const checkPassowrd = checkPasswordValidation(Password);
    if (!checkPassowrd) {
      alert("Success Login");
    } else {
      alert(checkPassowrd);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.text}>Username</Text>
      <Input
        placeholder="Username"
        value={Username}
        // setValue={setUsername}
        cb={setUsername}
      />

      <Text style={styles.text}> Email</Text>
      <Input
        style={StyleSheet.input}
        placeholder="aaaa@gmail.com"
        value={Email}
        //  keyboardType="email-address"
        cb={(text) => handlEmail(text)}
        // cb={setEmail}
        // setValue={setEmail}
      />
      {checkEmail ? (
        <Text style={styles.valid}>Wrong format email</Text>
      ) : (
        <Text style={styles.valid}> </Text>
      )}
      <Text style={styles.text}>Password</Text>
      <View>
        <Input
          style={StyleSheet.input}
          placeholder="Password"
          value={Password}
          //setValue={setPassword}
          cb={(text) => setPassword(text)}
          //cb={setPassword}
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
      <Text style={styles.text}>Confirm-Password</Text>
      <Input
        style={StyleSheet.input}
        placeholder="Confirm Password"
        value={ConfirmPassword}
        //  setValue={setConfirmpassword}
        cb={setConfirmpassword}
        secureTextEntry={true}
      />

      <Button
        inverted={false}
        text="start"
        onPress={() => {
          if (!Username || !Email || !Password || !ConfirmPassword) {
            return Alert.alert("please add all the fields");
          }
          if (Password !== ConfirmPassword) {
            return Alert.alert(
              "the pasword and confirmPassword must be the same"
            );
          }

          handleLogin();
          dispatch(
            addUsers({
              username: Username,
              email: Email,
              password: Password,
              confirmPassword: ConfirmPassword,
            })
          );
        }}
      />
      <Button inverted={true} text="sign in " onPress={onSignInPressed} />
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
    fontSize: 32,
    color: "black",
    marginVertical: 20,
    marginTop: 70,
    // marginBottom: 40,
  },

  input: {
    width: 385,
    height: 49,
    fontSize: 20,
    borderRadius: 10,
    marginLeft: 40,
    marginVertical: 30,
  },

  text: {
    width: 120,
    height: 24,
    marginLeft: 20,
    marginVertical: 13,
  },
  valid: {
    // alignSelf: "center",
    alignSelf: "flex-end",
    color: "red",
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
});
export default SignUp;
