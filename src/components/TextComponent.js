//Importação dos componentes do react-native
import { Text } from "react-native";

//Exportação padrão, e indica as nossas Props que vão ser utilizadas
export default function Texto({ texto, estilos }) {
  //O "return" Retorna e Renderiza tudo o que está dentro dele
  //Aqui indica onde as props vão aparecer, e  componentiza o Text
  return <Text style={estilos}>{texto}</Text>;
}
