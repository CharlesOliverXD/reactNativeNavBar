import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
// import Accueil from './ecrans/accueil';


const App = () => {
  return (
    // <Accueil/>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;