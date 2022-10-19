import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Input from "../../Compenents/input";
import Button from "../../Compenents/Button";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/Product/productSlice";
import * as ImagePicker from "expo-image-picker";
import ActionSheet from "react-native-actionsheet";
const CreateProduct = ({ onClose, setProduit, produits }) => {
  const [Label, setLabel] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [CodeBar, setCodeBar] = useState("");
  const [image, setImage] = useState("");
  const actionSheet = useRef();

  const mediaPermisson = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync;
  };
  useEffect(() => {
    mediaPermisson();
  }, []);

  const openImagePicker = async () => {
    const pickResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,

      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsEditing: true,
    });
    console.log(pickResult);
    if (!pickResult.cancelled) {
      setImage(pickResult.uri);
    }
  };
  const cameraOpen = async () => {
    const cameraResult = await ImagePicker.requestCameraPermissionsAsync();

    const result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!cameraResult.cancelled) {
      setImage(cameraResult.uri);
      console.log(cameraResult.uri);
    }
  };
  const showActionSheet = () => {
    actionSheet.current.show();
  };
  const optionArray = ["Take a picture", "choose a picture", "Cancel"];

  const dispatch = useDispatch();
  //const Navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "white",
          height: 48,
          marginBottom: 8,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            marginLeft: 22,
          }}
        >
          Create Product
        </Text>
        <Pressable
          onPress={() => {
            onClose(false);
          }}
        >
          <AntDesign name="closecircle" size={32} color="black" />
        </Pressable>
      </View>
      <ScrollView>
        <Text style={styles.text}>Label</Text>

        <Input
          placeholder="Label"
          value={Label}
          //setValue={setLabel}
          cb={setLabel}
        />
        <Text style={styles.text}> Description</Text>
        <Input
          style={StyleSheet.input}
          placeholder="Description"
          value={Description}
          //  setValue={setDescription}
          cb={setDescription}
        />
        <Text style={styles.text}>Price</Text>
        <Input
          style={StyleSheet.input}
          placeholder="Price"
          value={Price}
          keyboardType="numeric"
          // setValue={setPrice}
          cb={setPrice}
        />
        <Text style={styles.text}>Code bar</Text>
        <Input
          style={StyleSheet.input}
          placeholder="Code bar"
          value={CodeBar}
          keyboardType="numeric"
          // setValue={setCodeBar}
          cb={setCodeBar}
        />

        <TouchableOpacity onPress={showActionSheet}>
          {!image ? (
            <Image
              style={styles.Photo}
              source={require("../../assets/Image/Photo2.png")}
            />
          ) : (
            <Image style={styles.Photo} source={{ uri: image }} />
          )}
        </TouchableOpacity>
        <ActionSheet
          ref={actionSheet}
          options={optionArray}
          onPress={(indexButton) => {
            switch (indexButton) {
              case 0:
                cameraOpen();
                //{cameraOpen()}
                break;

              case 1:
                openImagePicker();
                break;
              default:
                break;
            }
          }}
        />
        <Button
          text="Save"
          onPress={() => {
            if (!Label || !Price || !Description || !CodeBar) {
              return Alert.alert("please add all the fields");
            }
            dispatch(
              addProduct({
                id: produits.length + 1,
                title: Label,
                price: Price,
                description: Description,
                codeBar: CodeBar,
                image: image,
              })
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: 30,
  },

  input: {
    width: 385,
    height: 49,
    fontSize: 20,
    borderRadius: 10,
    marginLeft: 22,
    marginVertical: 30,
  },

  text: {
    width: 97,
    height: 24,
    marginLeft: 22,
    marginVertical: 7,
  },

  Photo: {
    width: "100%",
    height: 157,
    marginVertical: 15,
    marginTop: 32,
  },
  picture: {
    width: "100%",
    height: 157,
    resizeMode: "contain",
  },
});
export default CreateProduct;
