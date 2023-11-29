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
    left: 10,
    width: 500,
    height: 240
  },
  logo: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 105,
    height: 45,
  },
  img2: {
    position: 'relative',
    width: 150,
    height: 150,
    marginLeft: '-30px',
    marginTop: '-30px'
  },
  botao: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  botao2: {
    width: 120,
    height: 40,
    backgroundColor: '#be8b8b',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'times new romanic',
    fontSize: 18,
    color: '#000',
  },
  text2: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 28,
    color: '#fff',
  },
  toptext: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  center: {
    position: 'absolute',
    top: 150,
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
  textinput: {
    width: 350,
    height: 100,
    backgroundColor: '#be8b8b',
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 14,
    padding: 5
  },
  inputtext: {
    fontFamily: 'Arial',
    fontSize: 18,
    marginBottom: 10,
  },
});