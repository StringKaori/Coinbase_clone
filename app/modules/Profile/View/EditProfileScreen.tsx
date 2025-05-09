import { useFocusEffect } from "@react-navigation/native";
import { useMainHeaderStore } from "global";
import { useCallback } from "react";
import { ScrollView, View, Text } from "react-native";

const EditProfileScreen = () => {
  const { setIsMainHeaderVisible } = useMainHeaderStore();

  // TODO: - mergear os dois header em 1 pra n ter q ficar escondendo dessa forma ruim
  useFocusEffect(
    useCallback(() => {
    setIsMainHeaderVisible(true);
    }, [])
  );

  return (
    <ScrollView>
      <View>
        <Text>fdafdaadfadfadfafadfadf</Text>
      </View>
    </ScrollView>
  );
};

export { EditProfileScreen };
