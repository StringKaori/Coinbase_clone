import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useThemeStore } from "@themes/useThemeStore";
import { LinearGradient } from "expo-linear-gradient";
import ProfilePicSVG from "@assets/ProfilePic.svg";
import WalletSVG from "@assets/wallet.svg";
import { ThemeType } from "@themes/types/ThemeType";
import { GradientText } from "@common/components";
import { useProfileStore, useAccountTotalStore } from "global";
import CryptoSVG from "@assets/Crypto.svg";
import GiftCardSVG from "@assets/GiftCard.svg";

// TODO: - pass to viewmodel
import { formatBalance } from "@common/helpers/formatBalance";

const ProfileScreen = () => {
  const { theme, width } = useThemeStore();
  // TODO: - pass to viewmodel
  const { accountTotal } = useAccountTotalStore();
  const formattedDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };
  const getStatusColor = (status: string) => {
    return status === "Successful" ? "#0FE133" :
           status === "Failed" ? "#EB3232" : "#979797"
  }

  const { username, recentTransactions } = useProfileStore();

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
            # {formatBalance(accountTotal)}
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
                <Text style={{ fontSize: 12, color:getStatusColor(item.status) }}>{item.status}</Text>
              </View>

              <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                <Text style={styles.convertedValue}>
                  N {formatBalance(item.convertedValue)}
                </Text>
                <Text style={[styles.grayText, { fontSize: 12 }]}>
                  {formattedDate(item.date)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const createStyles = (theme: ThemeType, width: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      width: width,
    },
    profileTitle: {
      color: theme.colors.currencyTitle,
      fontSize: 16,
      paddingLeft: 28,
      paddingBottom: 21,
    },
    gradientContainer: {
      height: 269,
      justifyContent: "center",
      alignItems: "center",
    },
    balanceText: {
      color: theme.colors.secondary,
      fontSize: 14,
    },
    editProfileButton: {
      backgroundColor: "#fff",
      width: 113,
      height: 29,
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    recentTransactionsTitle: {
      color: theme.colors.currencyTitle,
      fontSize: 14,
      padding: 28,
    },
    iconWithGradientBackground: {
      width: 46,
      height: 46,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
    },
    recentTransactionButton: {
      paddingBottom: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    transactionInfoContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 13,
    },
    grayText: {
      color: theme.colors.recentTransactionSecondary,
    },
    convertedValue: {
      color: theme.colors.success,
    },
  });

export { ProfileScreen };
