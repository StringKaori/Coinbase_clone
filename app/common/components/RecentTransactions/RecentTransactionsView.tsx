import { LinearGradient } from "expo-linear-gradient";
import { TransactionStatus, useProfileStore } from "global";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { formatBalance } from "@common/helpers/formatBalance";
import CryptoSVG from "@assets/Crypto.svg";
import GiftCardSVG from "@assets/GiftCard.svg";

const RecentTransactionsView = () => {
  const { recentTransactions } = useProfileStore();
  const { theme, width } = useThemeStore();
  const styles = createStyles(theme);

  const getStatusColor = (status: TransactionStatus): string => {
    return status === "Successful" ? "#0FE133" : 
           status === "Failed" ? "#EB3232" : "#979797";
  };

  const formattedDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <View style={{ flex:1 }}>
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
                <Text
                  style={{
                    fontSize: 12,
                    color: getStatusColor(item.status),
                  }}
                >
                  {item.status}
                </Text>
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
    </View>
  );
};

import { ThemeType } from "@themes/types/ThemeType";
import { StyleSheet } from "react-native";
import { useThemeStore } from "@themes/useThemeStore";

const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
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

export { RecentTransactionsView };
