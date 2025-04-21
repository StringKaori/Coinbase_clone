import { GradientText } from "@common/components";
import { useThemeStore } from "@themes/useThemeStore";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHomeViewModel } from "../ViewModel/useHomeViewModel";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "@routes/Stack/HomeStack/types/HomeStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const HomeScreen = () => {
  const { theme, width, height } = useThemeStore();
  const styles = createStyles(theme.colors.background);
  const viewModel = useHomeViewModel();
  // MARK: - Navigation handlers
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const renderSVG = (name: string) => {
    const SvgComponent = viewModel.imageMock[name];
    return SvgComponent ? <SvgComponent /> : null;
  };

  return (
    <SafeAreaView style={[styles.container, { height: height }]}>
      <GradientText
        text={"Hi, Bossun Jones"}
        style={[theme.text.title, { fontWeight: "regular", textAlign: "left" }]}
      />
      <Text style={{ fontSize: 18 }}>Welcome Back!</Text>
      <Text style={{ fontSize: 16 }}>
        Choose your prefered card to continue
      </Text>

      <FlatList
        data={viewModel.exchangeMethods}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 10, alignItems: "center" }}
        style={{ width: width * 0.9 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
           style={{ paddingBottom: 10 }}
           onPress={() => navigation.navigate('CryptoExchangeScreen', item)}>
            {renderSVG(item.name)}
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const createStyles = (background: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: background,
      paddingHorizontal: 28,
      flex: 1,
    },
  });

export { HomeScreen };
