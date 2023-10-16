import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello, Worlds</Text>
      <AntDesign name="minussquareo" size={26} />
    </View>
  );
};

export default App;
