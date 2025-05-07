import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useThemeStore } from "@themes/useThemeStore";
import { LinearGradient } from "expo-linear-gradient";
import ProfilePicSVG from "@assets/ProfilePic.svg";
import WalletSVG from "@assets/wallet.svg";
import { GradientText } from "@common/components";
import { useProfileStore } from "global";
import CryptoSVG from "@assets/Crypto.svg";
import GiftCardSVG from "@assets/GiftCard.svg";
import { useProfileViewModel } from "../ViewModel/useProfileViewModel";
import { createStyles } from "./ProfileStyles";

const ProfileScreen = () => {
  const { theme, width } = useThemeStore();
  const { username, recentTransactions } = useProfileStore();
  const viewModel = useProfileViewModel();

  const styles = createStyles(theme, width);
  return (
    <SafeAreaView style={styles.container}>
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

        <TouchableOpacity style={styles.editProfileButton}>
          <GradientText text={"Edit Profile"} style={undefined} />
        </TouchableOpacity>
      </LinearGradient>

      <Text style={styles.recentTransactionsTitle}>Recent Transactions</Text>
      <FlatList
        data={recentTransactions}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 28 }}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.recentTransactionButton}>
            <LinearGradient
              colors={item.iconColorsGradient}
              style={styles.iconWithGradientBackground}
            >
              {item.type === "crypto" ? (
                <CryptoSVG width={20} height={20} />
              ) : (
                <GiftCardSVG width={23} height={23} />
              )}
            </LinearGradient>
            <View style={styles.transactionInfoContainer}>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.grayText}>{item.title}</Text>
                {/* TODO: pass to view model logic to handle this color */}
                <Text style={{ fontSize: 12, color:viewModel.getStatusColor(item.status) }}>{item.status}</Text>
              </View>

              <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                <Text style={styles.convertedValue}>
                  N {viewModel.formatBalance(item.convertedValue)}
                </Text>
                <Text style={[styles.grayText, { fontSize: 12 }]}>
                  {viewModel.formattedDate(item.date)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export { ProfileScreen };
