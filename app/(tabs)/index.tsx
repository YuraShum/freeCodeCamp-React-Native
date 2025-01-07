import { View, Text, StyleSheet, ImageBackground } from "react-native";
import icedCoffeImage from '@/assets/images/iced-coffee.png'

type Props = {};

const App = (props: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeImage}
      resizeMode="cover"
      style={styles.backroundImage}
      >
        <Text style={styles.text}>Coffe shop</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover',
    flex: 1
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },
});
