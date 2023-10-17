import { StyleSheet, Text, View, Linking, TouchableOpacity, Platform, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [texto, setTexto] = useState()

  const llamarNumero = ({texto}) => {
    const phoneNumber = texto;
    Linking.openURL(`tel:${phoneNumber}`)
  }

  const mandarSMS = ({texto}) => {
    const url = (Platform.OS === 'android')
    ? 'sms:1555151452?body=HOLA'
    : 'sms:1555151452'
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Unsupported url: ' + url)
      } else {
        return Linking.openURL(url)
      }
    }).catch(err => console.error('An error occurred', err))
  }

  const mandarWhatsapp = ({texto}) => {
    const whatsappNo = texto
    const whatsappMsg = "hola"
    Linking.openURL(`whatsapp://send?phone=${whatsappNo}&text=${whatsappMsg}`);
  }

  return (
    <View style={styles.container}>
      
      <Text>Ingrese el numero</Text>

      <TextInput 
      onChangeText={setTexto} 
      value={texto} 
      style={styles.input}
      keyboardType="numeric"
      />

      <Text>LLAMADAS TELEFONICAS:</Text>

      <TouchableOpacity onPress={() => llamarNumero({texto})}>
        <Text>Llamar</Text>
      </TouchableOpacity>

      <Text>MANDAR SMS:</Text>

      <TouchableOpacity onPress={() => mandarSMS({texto})}>
        <Text>Textear</Text>
      </TouchableOpacity>

      <Text>MANDAR WHATSAPP:</Text>

      <TouchableOpacity onPress={() => mandarWhatsapp({texto})}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  }
});
