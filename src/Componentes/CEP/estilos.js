import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#fac7d0'
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
    width: 60,
    height: 40,
    backgroundColor: '#be8b8b',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginVertical: 15

  },
  text: {
    textAlign: 'center',
    fontFamily: 'times new romanic',
    fontSize: 18,
    color: '#000',
  },
  ok: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#fff',
  },
  text2: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 14,
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
    top: 250,
    backgroundColor: '#fff',
    padding: 20,
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
    width: 300,
    height: 40,
    backgroundColor: '#be8b8b',
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 20,
    padding: 5,
    margin: 10
  },
  inputtext: {
    fontFamily: 'Arial',
    fontSize: 18,
    marginBottom: 10,
  },
});