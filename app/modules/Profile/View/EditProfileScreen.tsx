import { useFocusEffect } from "@react-navigation/native";
import { useMainHeaderStore } from "global";
import { useCallback } from "react";
import { ScrollView, View, Text } from "react-native";

const EditProfileScreen = () => {
  const { setIsMainHeaderVisible } = useMainHeaderStore();

  useFocusEffect(
    useCallback(() => {
      setIsMainHeaderVisible(true);
      return () => {
        // Optional: hide header when navigating away
        setIsMainHeaderVisible(false);
      };
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
