import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useThemeStore } from "@themes/useThemeStore";
import { LinearGradient } from "expo-linear-gradient";
import ProfilePicSVG from "@assets/ProfilePic.svg";
import WalletSVG from "@assets/wallet.svg";
import { GradientText, RecentTransactionsView } from "@common/components";
import { useProfileStore } from "global";
import { useProfileViewModel } from "../ViewModel/useProfileViewModel";
import { createStyles } from "./ProfileStyles";

const ProfileScreen = () => {
  const { theme, width } = useThemeStore();
  const { username } = useProfileStore();
  const viewModel = useProfileViewModel();

  const styles = createStyles(theme, width);
  return (
    <View style={styles.container}>
      <Text style={styles.profileTitle}>Profile</Text>
      <LinearGradient
        colors={["#e879a9", "#834ebd"]}
        style={styles.gradientContainer}
      >
        <ProfilePicSVG />
        <Text style={theme.text.profileName}>{username}</Text>

        <View
          style={{
            flexDirection: "row",
            width: 100,
            justifyContent: "space-between",
          }}
        >
          <WalletSVG />
          <Text style={styles.balanceText}>
            # {viewModel.totalBalance}
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.editProfileButton}
          onPress={viewModel.handleEditProfilePress}>
          <GradientText text={"Edit Profile"} style={undefined} />
        </TouchableOpacity>
      </LinearGradient>

      <RecentTransactionsView/>
    </View>
  );
};

export { ProfileScreen };
