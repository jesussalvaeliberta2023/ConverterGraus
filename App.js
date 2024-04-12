//Importação dos componentes do react-native
import { View } from "react-native";
//Importação do useState, que serve para definir o estado de algo
import React, { useState } from "react";
//Importações dos componentes
import styles from "./src/style/StyleSheet";
import Texto from "./src/components/TextComponent";
import Inputs from "./src/components/InputComponent";
import Botao from "./src/components/BtnComponent";

//Exportação padrão
export default function App() {
  //Essas são as variáveis de estado que vamos usar para definir o estado dos nossos componentes
  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");
  const [vazio, setVazio] = useState("");
  
  //Essa é a nossa função de cauculo onde...
  const calculo = () => {
    //Se celsius for diferente de nada
    if (celsius != "") {
      //Ele vai efetuar essa conta
      const fahrenheit = (parseFloat(celsius) * 9) / 5 + 32;
      //E definir a nossa variável Resultado com o reslutado da nossa conta 
      setResultado(
        "The value of " + celsius + "°C in Fahrenheit is " + fahrenheit + "°F"
      );
      //Tornar a variável Vazio, sem nada caso tenha alguma coisa
      setVazio("");
      //E limpar o Input para fazer uma nova conta
      setCelsius("");
    //Mas caso celsius for igual a nada
    } else {
      //Vai definir a variável Vazio com o seguinte texto:
      setVazio("Can't be null");
    }
  };

  //Retorna e Renderiza tudo o que está dentro dele
  return (
    //Essa é a View principal com
    <View style={styles.container}>
      {/* Textos de orientações de como usar */}
      <Texto texto="Convert your Celsius in Fahrenheit" estilos={styles.titulo} />
      <Texto texto="Put degrees in celsius:" estilos={{ fontWeight: "bold", marginRight: 95 }} />

      {/* Input para inserir o valor de Celsius, que analisa mudança no input e faz com que ele passe a ter o valor que foi inserido */}
      <Inputs estilos={styles.input} change={setCelsius} valor={celsius} />

      {/* Botão que executa a função Cauculo */}
      <Botao pressionar={calculo} estilos={styles.btn} estilobtn={{fontWeight: "bold"}} texto="Calculate" />

      {/* Textos auxiliares que indicam o resultado do esperado */}
      <Texto texto={resultado} estilos={{ marginTop: 20 }} />
      <Texto texto={vazio} />
    </View>
  );
}
