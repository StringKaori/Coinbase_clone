import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "global/types/RootStackParamList";
import { useThemeStore } from "@themes/useThemeStore";
import { RenderExchangeMethodSVG } from "@common/helpers/RenderExchangeMethodSVG/RenderExchangeMethodSVG";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  route: RouteProp<RootStackParamList, "DefaultExchangeScreen">;
};
//TODO - revisar tipagem dos parametros de rotas
const CryptoExchangeScreen = ({ route }: Props) => {
  const item = route.params;
  const { theme, width, height } = useThemeStore();
  const styles = createStyles(theme.colors.background, width);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.currencyTitle}>{item.title}</Text>

      <LinearGradient
        colors={item.backgroundGradient.colors}
        // locations={theme.colors.gradient.locations}
        // start={theme.colors.gradient.start}
        // end={theme.colors.gradient.end}
        style={styles.gradientContainer}
      >
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 3,
            elevation: 5,
          }}
        >
          {RenderExchangeMethodSVG(item.name, { top: -40 })}
        </View>
        <Text style={styles.currencyTitle}>{item.subtitle}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

const createStyles = (background: string, width: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: background,
      flex: 1,
      alignItems: "center",
    },
    currencyTitle: {
      alignSelf: "flex-start",
      paddingLeft: 28,
      paddingBottom: 40,
    },
    gradientContainer: {
      width: "100%",
      alignItems: "center",
      paddingTop: 10,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
  });

export { CryptoExchangeScreen };
