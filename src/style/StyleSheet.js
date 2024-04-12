//Importação do StyleSheet, para podermos fazer a estilização
import { StyleSheet } from "react-native";

//Variável que nos permite criar a estilização para componentes
const styles = StyleSheet.create({
  //Classes dos componentes
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    alignItems: "center",
    justifyContent: "center",
  },

  input:{
    width: 250,
    height: 35,
    backgroundColor: "#B0C4DE",
    padding: 10,
    borderRadius: 5,
  },

  titulo:{
    fontSize: 25,
    fontStyle: "italic",
    marginBottom: 20,
  },

  btn:{
    width: 175,
    height: 35,
    borderRadius: 5,
    backgroundColor: "#B0C4DE",
    justifyContent:"center",
    alignItems:"center",
    marginTop: 30,
    fontWeight: "bold" 
  }
});

export default styles;
