import {
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import IntroSVG from "@assets/Intro_screen_image.svg";
import { useThemeStore } from "@themes/useThemeStore";
import { GradientText, SimpleButton } from "@common/components";
import { useNavigation } from "@react-navigation/native";
import { InitialStackParamList } from "@routes/Stack/InitialStack/types/InitialStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

type InitialScreenNavigationProp =
  NativeStackNavigationProp<InitialStackParamList>;

const InitialScreen = () => {
  const navigation = useNavigation<InitialScreenNavigationProp>();
  const { theme, width, height } = useThemeStore();
  const styles = getStyles(theme.colors.background);

  const handlePress = async () => {
    try {
      await AsyncStorage.setItem("isFirstTime", "true");
    } catch (e) {
      console.error(e);
    } finally {
      navigation.reset({ index: 0, routes: [{ name: "LoginScreen" }] });
    }
  };

  return (
    <SafeAreaView style={[styles.container, { height: height }]}>
      <IntroSVG width={250} height={250} />

      <GradientText
        text="Exchange Bitcoin, Ethereum and gift cards for money"
        style={[theme.text.title, { width: width * 0.9 }]}
      />

      <Text style={[theme.text.tutorialParagraph, { width: width * 0.6 }]}>
        Provide us with the necessary required information and let us do the
        convertion asap!!!
      </Text>

      <Text style={[theme.text.tutorialParagraph, { width: width * 0.6 }]}>
        Unlimited type cards on our platform ranging from amazon, iTunes, Google
        Play Store and e.t.c
      </Text>

      <Text
        style={[
          theme.text.tutorialParagraph,
          { width: width * 0.6, paddingBottom: 33 },
        ]}>
        Our pay out process is the one of the fatest and guaranteed trusted
      </Text>

      <SimpleButton content={"continue"} handler={handlePress} />
    </SafeAreaView>
  );
};

export { InitialScreen };
// TODO: use correct fonts and zustand Theme
const getStyles = (backgroundColor: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: backgroundColor,
    },
  });
