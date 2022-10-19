import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Input from "../../Compenents/input";
import Button from "../../Compenents/Button";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { editProduct } from "../../features/Product/productSlice";
import { useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import ActionSheet from "react-native-actionsheet";

const EditProduct = () => {
  const { params } = useRoute();
  const [Label, setLabel] = useState(params.item.title);
  const [Description, setDescription] = useState(params.item.description);
  const [Price, setPrice] = useState(params.item.price);
  const [CodeBar, setCodeBar] = useState(params.item.codeBar);
  const [image, setImage] = useState(params.item.image);
  const Navigation = useNavigation();
  const products = useSelector((state) => state.products);
  const actionSheet = useRef();
  const mediaPermisson = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync;
  };
  useEffect(() => {
    mediaPermisson();
  }, []);
  console.log("image", image);
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
  const onSavePress = (item) => {
    console.log("=================params===================");
    console.log(params);
    console.log("====================================");
    dispatch(
      editProduct({
        id: params.item.id,
        title: Label,
        price: Price,
        description: Description,
        codeBar: CodeBar,
        image: image,
      })
    );
    //params.setProduit();
    Navigation.navigate("Home", { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => {
          Navigation.goBack();
        }}
      >
        <SafeAreaView
          style={{
            width: "100%",
            height: 55,
            backgroundColor: "#333333",
          }}
        >
          <AntDesign name="left" size={24} color="black" />
        </SafeAreaView>
      </Pressable>

      <Text style={styles.title}>Product Label</Text>
      <ScrollView>
        <Text style={styles.text}>Label</Text>
        <Input
          style={StyleSheet.input}
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
          // setValue={setDescription}
          cb={setDescription}
        />
        <Text style={styles.text}>Price</Text>
        <Input
          style={StyleSheet.input}
          placeholder="Price"
          value={Price}
          // setValue={setPrice}
          cb={setPrice}
        />
        <Text style={styles.text}>Code bar</Text>
        <Input
          style={StyleSheet.input}
          placeholder="Code bar"
          value={CodeBar}
          //setValue={setCodeBar}
          cb={setCodeBar}
        />
        <TouchableOpacity onPress={showActionSheet}>
          {!image ? (
            <Image
              style={styles.Photo}
              // source={{ uri: image }}
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
        <Image
        // style={styles.Photo}
        // source={{ uri: image }}
        //source={require("../../assets/Image/Photo2.png")}
        />
        <Button text="Save" onPress={onSavePress} />
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

    // padding: 20,
    //paddingHorizontal: "100%",
  },
  title: {
    fontSize: 32,
    color: "black",
    marginVertical: 20,
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
    width: 97,
    height: 24,
    marginLeft: 20,
    marginVertical: 13,
  },
  text1: {
    width: 93,
    height: 24,
    marginLeft: 20,
    marginVertical: 13,
  },
  Picture: {
    width: "100%",
    height: 200,
    fontSize: 16,
  },
  Photo: {
    width: "100%",
    height: 200,
    fontSize: 16,
  },
});
export default EditProduct;
