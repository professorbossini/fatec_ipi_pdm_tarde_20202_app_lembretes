import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import LembreteItem from './components/LembreteItem';
import LembreteInput from './components/LembreteInput';

export default function App() {

  //const [lembrete, setLembrete] = useState ('');
  const [lembretes, setLembretes] = useState ([]);
  const [contadorLembretes, setContadorLembretes] = useState (0);

  /*const capturarLembrete = (lembrete) => {
    setLembrete(lembrete);
  }*/
  const adicionarLembrete = (lembrete) => {
    setLembretes ((lembretes) => {
      setContadorLembretes (contadorLembretes + 1);
      return [{key: contadorLembretes.toString(), value:lembrete}, ...lembretes]
    });
  }
  const removerLembrete = (keyASerRemovida) => {
    setLembretes(lembretes => {
      return lembretes.filter((lembrete) => {
        return lembrete.key !== keyASerRemovida
      })
    })
  }

  return (
    <View style={estilos.telaPrincipalView}>
      <LembreteInput onAdicionarLembrete={adicionarLembrete}/>
      <View>
        <FlatList 
          data={lembretes}
          renderItem={
            lembrete => (
              <LembreteItem
                chave={lembrete.item.key} 
                lembrete={lembrete.item.value} 
                onDelete={removerLembrete}
              />
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
