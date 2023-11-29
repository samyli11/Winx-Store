import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#fac7d0'
  },
  botao: {
    width: 150 ,
    height: 45,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  botaocolecao: {
    width: 250,
    height: 62,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    marginHorizontal: 125,
    marginTop: 100
  },
  text: {
    textAlign: 'center',
    fontFamily: 'times new romanic',
    fontSize: 18,
  },
  textbaixo: {
    textAlign: 'center',
    fontFamily: 'times new romanic',
    fontSize: 16,
    marginTop: 3,
  },
  toptext: {
    textAlign: 'center',
    fontFamily: 'times new romanic',
    fontSize: 24,
    position: 'absolute',
    top: 100
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  bottomdiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
  },
  botaohelp: {
    fontWeight: "bold",
  },
});