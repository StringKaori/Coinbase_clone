import { Text, SafeAreaView, StyleSheet, useWindowDimensions } from "react-native";
import IntroSVG from "@assets/Intro_screen_image.svg";
import { useThemeStore } from "../../../theme/useThemeStore";
import { SimpleButton } from "../../../common";
import { useNavigation } from "@react-navigation/native";
import { InitialStackParamList } from "../../../Routes/Stack/InitialStack/types/InitialStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

type InitialScreenNavigationProp = NativeStackNavigationProp<InitialStackParamList>;

const InitialScreen = () => {
  
  const navigation = useNavigation<InitialScreenNavigationProp>()
  const { theme } = useThemeStore();
  const {width, height} = useWindowDimensions();

  const handlePress = async () => {
    try{
      await AsyncStorage.setItem("isFirstTime", "true");
    } catch(e) {
      console.error(e);
    } finally {
      navigation.reset({ index: 0, routes:[{name: "LoginScreen"}] });
    }
  };

  return (
    <SafeAreaView style={[styles.container, { height: height }]}>

      <IntroSVG width={250} height={250} />

      <Text style={styles.title}>
        Exchange Bitcoin, Ethereum and gift cards for money
      </Text>

      <Text style={styles.paragraph}>
        Provide us with the necessary required information and let us do the
        convertion asap!!!
      </Text>

      <Text style={styles.paragraph}>
        Unlimited type cards on our platform ranging from amazon, iTunes, Google
        Play Store and e.t.c
      </Text>

      <Text style={[styles.paragraph, {paddingBottom: 33}]}>
        Our pay out process is the one of the fatest and guaranteed trusted
      </Text>

      <SimpleButton 
        content={"CONTINUE"}
        handler={handlePress}/>
    </SafeAreaView>
  );
};

export { InitialScreen };
// TODO: use correct fonts and zustand Theme
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    color: "#9046B2",
    fontSize: 24,
    fontWeight: "bold",
    width: 320,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 15,
    width: 300,
    textAlign: "center",
    paddingVertical: 5,
  },
});
