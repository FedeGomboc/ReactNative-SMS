import { StyleSheet, Text, View, Linking, Button, TouchableOpacity, Platform } from 'react-native';

export default function App() {

  const llamarNumero = () => {
    const phoneNumber = 1144719591;
    Linking.openURL(`tel:${phoneNumber}`)
  }

  const mandarSMS = () => {
    const url = (Platform.OS === 'android')
    ? 'sms:1144719591?body=HOLA'
    : 'sms:1144719591'
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Unsupported url: ' + url)
      } else {
        return Linking.openURL(url)
      }
    }).catch(err => console.error('An error occurred', err))
  }

  return (
    <View style={styles.container}>
      <Text>LLAMADAS TELEFONICAS:</Text>

      <TouchableOpacity onPress={() => llamarNumero()}>
        <Text>Llamar</Text>
      </TouchableOpacity>

      <Text>MANDAR SMS:</Text>

      <TouchableOpacity onPress={() => mandarSMS()}>
        <Text>Textear</Text>
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
});
