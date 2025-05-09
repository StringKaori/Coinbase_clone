import { GradientText } from "@common/components";
import { useThemeStore } from "@themes/useThemeStore";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native";
import { useHomeViewModel } from "../ViewModel/useHomeViewModel";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RenderExchangeMethodSVG } from "@common/helpers/RenderExchangeMethodSVG/RenderExchangeMethodSVG";
import { HomeStackParamList } from "@routes/Stack/HomeStack/types/HomeStackParamList";

const HomeScreen = () => {
  const { theme, width, height } = useThemeStore();
  const styles = createStyles(theme.colors.background);
  const viewModel = useHomeViewModel();
  // MARK: - Navigation handlers
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <View style={[styles.container, { height: height }]}>
      <GradientText
        text={`Hi, ${viewModel.username}`}
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
           onPress={() => {navigation.navigate('DefaultExchangeScreen', item)}}>
            {RenderExchangeMethodSVG(item.name)}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const createStyles = (background: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: background,
      paddingLeft: 18,
      flex: 1,
    },
  });

export { HomeScreen };
