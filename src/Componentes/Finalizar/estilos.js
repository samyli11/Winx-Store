import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#fac7d0'
  },
  imagem: {
    position: 'absolute',
    bottom: 0,
    width: 550,
    height: 250
  },
  logo: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 105,
    height: 45,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'times new romanic',
    fontSize: 18,
    color: '#000',
  },
  center: {
    position: 'absolute',
    top: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exit: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    bottom: 20,
    right: 30,
    position: 'absolute',
  },
  text2: {
    fontFamily: 'Arial',
    fontSize: 50,
    
  }
});