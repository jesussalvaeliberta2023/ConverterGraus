//Importação dos componentes do react-native
import { TextInput } from "react-native";

//Exportação padrão, e indica as nossas Props que vão ser utilizadas
export default function Inputs({ estilos, change, valor }) {
  //O "return" Retorna e Renderiza tudo o que está dentro dele
  //Aqui indica onde as props vão aparecer, e  componentiza o TextInput
  return <TextInput style={estilos} onChangeText={change} value={valor} />;
}
