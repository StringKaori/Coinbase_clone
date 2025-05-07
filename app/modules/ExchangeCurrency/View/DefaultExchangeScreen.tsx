import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "global/types/RootStackParamList";
import { useThemeStore } from "@themes/useThemeStore";
import { RenderExchangeMethodSVG } from "@common/helpers/RenderExchangeMethodSVG/RenderExchangeMethodSVG";
import { LinearGradient } from "expo-linear-gradient";
import { CustomModal, SimpleButton } from "@common/components";
import { useExchangeCurrencyViewModel } from "../ViewModel/useExchangeCurrencyViewModel";
import { ExchangeInputsBuilder } from "../ViewModel/ExchangeInputsBuilder";

type Props = {
  route: RouteProp<RootStackParamList, "DefaultExchangeScreen">;
};

const DefaultExchangeScreen = ({ route }: Props) => {
  const item = route.params;

  const { theme, width, height } = useThemeStore();
  const styles = createStyles(
    theme.colors.background,
    width,
    theme.colors.defaultTitle
  );

  const viewModel = useExchangeCurrencyViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.currencyTitle}>{item.title}</Text>

      <LinearGradient
        colors={item.backgroundGradient.colors}
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
          { RenderExchangeMethodSVG(item.name, { top: -40 }) }
        </View>
        <Text style={styles.currencySubtitle}>{item.subtitle}</Text>
      </LinearGradient>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ paddingVertical: 30 }}>
          The total value you derived here will be the amount you’ll be receiving
          during the total transaction process
        </Text>

        <View style={{ justifyContent: "center", alignItems: "center", paddingBottom: 15}}>
          {/* TODO: - arrumar pra deixar bonitinho */}

          <ExchangeInputsBuilder item={item} viewModel={viewModel}/>
          
          {viewModel.errorMessage != "" &&
            <Text style={{color: 'red', marginBottom: 20}}>
              {viewModel.errorMessage}
            </Text>
          }

          <View style={styles.total}>
            <Text>N {viewModel.exchangeTotal}</Text>
          </View>

          <SimpleButton
            content={"continue"}
            handler={() => viewModel.handleContinuePress(item)}
          />
        </View>
      </ScrollView>

      <CustomModal
        visible={viewModel.isModalVisible}
        onClose={viewModel.onClose}
        message={
          "Exchange was successfull, your new balance is available on your profile."
        }
      />
    </SafeAreaView>
  );
};

// TODO: - add colors and everything possible to the theme-
const createStyles = (
  background: string,
  width: number,
  currencyTitleColor: string
) =>
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
      color: currencyTitleColor,
    },
    currencySubtitle: {
      alignSelf: "flex-start",
      paddingLeft: 28,
      width: width * 0.95,
      top: -20,
      paddingBottom: 20,
      color: "#fff",
    },
    gradientContainer: {
      width: width,
      height: 240,
      alignItems: "center",
      paddingTop: 10,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
    total: {
      width: 207,
      height: 61,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderStyle: "dashed",
      borderColor: "purple",
      marginBottom: 21,
    },
  });

export { DefaultExchangeScreen };
