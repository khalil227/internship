import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CreateProduct from "../CreateProduct";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
// const[image,setImage]=useState();
// const PRODUCTS = [
//   {
//     id: 1,
//     title: "Camera",
//     price: "4000 DA",
//     description: "RAM 16GO ",
//     codeBar: "612355478",
//     image: "uri",
//   },
//   {
//     id: 2,
//     title: "Tv",
//     price: "359000 DA",
//     description: "condor ",
//     codeBar: "612355489",
//     // image: "uri",
//   },

//   {
//     id: 3,
//     title: "Power bank",
//     price: "6050 DA",
//     description: "MI ",
//     codeBar: "32598741255",
//     // image: "source={{ uri: image }}",
//   },
// ];

const Product = ({ title, price, image }) => {
  return (
    <View>
      <Image style={styles.Photo} source={{ uri: image }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#EEEEEE",
          height: 48,
          marginBottom: 8,
        }}
      >
        <Text style={styles.text}> {title} </Text>
        <Text style={styles.text}> {price} </Text>
      </View>
    </View>
  );
};
const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const Produits = useSelector((state) => state?.products?.products);
  const Navigation = useNavigation();

  const onPressed = (item) => {
    Navigation.navigate("ProductDetails", { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hello Username! </Text>
      <ScrollView>
        {Produits.map((item, index) => {
          //console.log("- ", item);
          return (
            <Pressable
              key={index}
              onPress={() => {
                onPressed(item);
              }}

              // console.log("add btn pressed");
            >
              <Product
                key={index}
                image={item?.image}
                title={item?.title}
                price={item?.price}
              />
            </Pressable>
          );
        })}
      </ScrollView>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          height: 80,
          width: 80,
          backgroundColor: "#4f4f4f",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="md-add-outline"
          size={50}
          color="white"
          //onPress={onAddPressed}
        />
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          return Alert.alert("Modal has been opend.");
          setModalVisible(!modalVisible);
        }}
      >
        <CreateProduct
          onClose={setModalVisible}
          // setProduit={setProduit}
          produits={Produits}
        />
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    backgroundColor: "#FFFFFF",
    padding: 27,
  },
  title: {
    fontSize: 32,
    marginHorizontal: 20,
    textAlign: "left",
    marginTop: 70,
    marginBottom: 3,
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  Photo: {
    width: "100%",
    height: 200,
    fontSize: 16,
  },
});
export default Home;
