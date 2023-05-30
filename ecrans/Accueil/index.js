
import { StyleSheet, Text, View } from 'react-native';

const  Accueil=() => {
  return (
    <View style={styles.container}>
      <Text>Accueil</Text>
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

export default Accueil ;
