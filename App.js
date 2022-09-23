import React,{useState}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';


export default function App() {
  const [dados,setDados] = useState("");
  const [cidade,setCidade] = useState("");
  
  async function carregaTempo(){
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,cily_name,forecast,max,min,date,description&key=0359d172&city_name=${cidade},sp`); 
    setDados(response.data.forecast[0]);
  }
  return (
    <View style={styles.container}>
        <View style={styles.bloco}>
          <Text style={styles.titulo}>Previsao do Tempo</Text>
        </View> 
       <View style={styles.bloco}>
            <Text style={styles.label}>Cidade:</Text>
            <TextInput
            placeholder = 'digite aqui a cidade ...'
            style={ styles.input}
            value={cidade}
            onChangeText={(value)=> setCidade(value)}

            />
        </View>
        <View style= {styles.bloco}>
            <TouchableOpacity style={styles.bloco} onPress={carregaTempo}>
              <Text style={styles.textoBotao}>Buscar</Text>
          </TouchableOpacity>
        </View>
      <View>
        <View style={styles.bloco}>
          <Tempo previsao ={dados}/>
        </View>
      </View>
   </View>
  );
}
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   bloco: {
     marginTop: 30,
     widht: '80%',
     marginLeft: '10%'
   },
   Label:{
     fontSize: 20
   },
   titulo:{
     fontSize: 30,
     textAlign: 'center'
   },
   Input:{
     borderBottomWidht: 2,
     fontSize: 20
   },
   botao: {
     backgroundColor: "#000",
   },
   textBotao:{
     fontSize: 20,
     color: "#fff",
     textAlign: 'center'
   }
 });