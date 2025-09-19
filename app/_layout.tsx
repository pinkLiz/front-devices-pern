import 'react-native-reanimated';

import { SafeAreaView, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function RootLayout() {
  const styles = StyleSheet.create ({
    titulo: {
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 30,
    },
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
    }
  });

  return (
    <>
      <SafeAreaView>
        <Text style={styles.titulo}>Hola mundo</Text>
        <Text style={styles.titulo}>Titulo del servicio</Text>
        <TextInput style={styles.input} placeholder='Ingresa tu servicio'/>
        <Text style={styles.titulo}>Titulo del paciente</Text>
        <TextInput style={styles.input} placeholder='Ingresa el paciente'/>

        <Pressable onPress={() => console.log('Diste click')}>
          <Text>Nueva cita</Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
}
