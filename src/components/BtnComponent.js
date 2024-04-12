//Importação dos componentes do react-native
import { Pressable, Text } from "react-native";

//Exportação padrão, e indica as nossas Props que vão ser utilizadas
export default function Botao({ estilos, estilobtn, pressionar, texto }) {
  //Retorna e Renderiza tudo o que está dentro dele
  return (
    //Aqui indica onde as props vão aparecer, e componentiza o nosso Pressable
    <Pressable onPress={pressionar} style={estilos}>
      <Text style={estilobtn}>{texto}</Text>
    </Pressable>
  );
}
