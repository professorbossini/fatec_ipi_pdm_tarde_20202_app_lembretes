import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const LembreteItem = (props) => {
  return (
    //poderia ser: <TouchableOpacity onPress={() => props.onDelete(props.chave)} >
    <TouchableOpacity onPress={props.onDelete.bind(this, props.chave)} >
      <View style={estilos.itemNaLista}>
        <Text>{props.lembrete}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderBottomColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
})

export default LembreteItem;