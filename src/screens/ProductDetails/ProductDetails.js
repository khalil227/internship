import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  Alert,
  TextInput,
} from "react-native";
import { useState } from "react";
import Button from "../../Compenents/Button";
import Input from "../../Compenents/input";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { deleteProduct } from "../../features/Product/productSlice";
import { useDispatch } from "react-redux";
const ProductDetails = () => {
  const { params } = useRoute();
  const [Label, setLabel] = useState(params.item.title);
  const [Price, setPrice] = useState(params.item.price);
  const [Description, setDescription] = useState(params.item.description);
  const [CodeBar, setCodeBar] = useState(params.item.codeBar);
  const [image, setImage] = useState(params.item.image);
  console.log(params.item);
  const Navigation = useNavigation();

  const onEditPressed = (item) => {
    Navigation.navigate("EditProduct", { item });
  };
  const onDeletePressed = () => {};

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
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
          <AntDesign name="left" size={24} color="#000000" />
        </SafeAreaView>
      </Pressable>

      <Image
        style={styles.Photo}
        source={{ uri: image }}
        //source={require("../../assets/Image/Photo.png")}
      />

      <TextInput
        style={{
          width: "100%",
          height: 24,
          marginLeft: 20,
          marginVertical: 13,
        }}
        // style={StyleSheet.title}
        placeholder="Label"
        value={Label}
        // setValue={setLabel}
        cb={setLabel}
      />

      <TextInput
        style={{
          width: "100%",
          height: 24,
          marginLeft: 20,
          marginVertical: 13,
        }}
        // style={StyleSheet.title}
        placeholder="Price"
        value={Price}
        //setValue={setPrice}
        cb={setPrice}
      />

      <TextInput
        style={{
          width: "100%",
          height: 24,
          marginLeft: 20,
          marginVertical: 13,
        }}
        //style={StyleSheet.title}
        placeholder="Description"
        value={Description}
        // setValue={setDescription}
        cb={setDescription}
      />

      <TextInput
        style={{
          width: "100%",
          height: 24,
          marginLeft: 20,
          marginVertical: 13,
        }}
        // style={StyleSheet.title}
        placeholder="CodeBar"
        value={CodeBar}
        //setValue={setCodeBar}
        cb={setCodeBar}
      />

      <Button
        inverted={false}
        text="Edit"
        onPress={() => onEditPressed(params.item)}
      />
      <Button
        inverted={true}
        text="Delete "
        onPress={(Label) => {
          dispatch(deleteProduct(params.item.id));
        }}

        //  {onDeletePressed}
      />
    </View>
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
  Photo: {
    width: "100%",
    height: 200,
    fontSize: 16,
  },

  // title: {
  //   width: "100%",
  //   height: 24,
  //   marginLeft: 20,
  //   marginVertical: 13,
  // },
});

export default ProductDetails;
