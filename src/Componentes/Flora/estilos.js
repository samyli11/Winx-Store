import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#fac7d0'
  },
  botao: {
    width: 150,
    height: 45,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  produto: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 175,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 14,
    marginTop: 5
  },
  textbaixo: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 12,
    marginTop: 3,
    color: '#fff',
  },
  toptext: {
    textAlign: 'center',
    fontFamily: 'ARIAL',
    fontSize: 24,
    position: 'absolute',
    top: 50
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
  exittext: {
    textAlign: 'center',
    fontFamily: 'times new romanic',
    fontSize: 18,
  },
  comprar: {
    backgroundColor: '#000',
    width: 60,
    padding: 2,
    margin: 5
  },
});