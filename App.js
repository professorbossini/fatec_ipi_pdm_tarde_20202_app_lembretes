import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [lembrete, setLembrete] = useState ('');
  const [lembretes, setLembretes] = useState ([]);
  const [contadorLembretes, setContadorLembretes] = useState (0);

  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete);
  }
  const adicionarLembrete = () => {
    setLembretes ((lembretes) => {
      setContadorLembretes (contadorLembretes + 1);
      return [{key: contadorLembretes.toString(), value:lembrete}, ...lembretes]
    });

    //console.log(lembretes);
    //console.log(lembrete);
  }
  return (
    <View style={estilos.telaPrincipalView}>
      <View style={estilos.entradaView}>
      {/*usuário irá inserir seus lembretes aqui*/}
      <TextInput 
        placeholder="Lembrar..."
        style={estilos.lembreteTextInput}
        onChangeText={capturarLembrete}
        value={lembrete}
      />
      <Button 
        title="Inserir"
        onPress={adicionarLembrete}
      />
      </View>

      <View>
        <FlatList 
          data={lembretes}
          renderItem={
            lembrete => (
              <View style={estilos.itemNaListaView}>
                <Text>{lembrete.item.value}</Text>
              </View>
            )
          }
        />
      
      
        {/*A lista de lembretes será exibida aqui
          <ScrollView>
          {
            lembretes.map((lembrete) =>
              <View style={estilos.itemNaListaView}><Text key={lembrete}>{lembrete}</Text></View>
            )
          }
        </ScrollView>
        */}        
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  entradaView: {
    marginBottom: 8

  },
  itemNaListaView: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },
  lembreteTextInput: { 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 8, 
    textAlign: 'center' 
  },
  telaPrincipalView: {
    padding: 50
  }
});
