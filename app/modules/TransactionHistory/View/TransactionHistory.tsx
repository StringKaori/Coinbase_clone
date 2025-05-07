import { SafeAreaView } from "react-native-safe-area-context";
import { RecentTransactionsView } from "@common/components";
import { useAccountTotalStore, useMainHeaderStore, useTransactionsStore } from "global";
import { CircleBuilder } from "./helpers/CircleBuilder";
import { View, Text, StyleSheet } from "react-native";
import { useThemeStore } from "@themes/useThemeStore";
import { ThemeType } from "@themes/types/ThemeType";
import DoubleCardSVG from "@assets/DoubleCard.svg";
import SuccessfulSVG from "@assets/Successful.svg";
import InProgressSVG from "@assets/InProgress.svg";
import FailedSVG from "@assets/Failed.svg";
import { formatBalance } from "@common/helpers/formatBalance";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const TransactionHistory = () => {

  const {setIsMainHeaderVisible} = useMainHeaderStore()

  useFocusEffect(
    useCallback(() => {
      setIsMainHeaderVisible(true);
      return () => {
        // Optional: hide header when navigating away
        setIsMainHeaderVisible(false);
      };
    }, [])
  );

  // the correct would be havin two states one for the total earned
  // and one for the accountTotal, but since all of this is static
  // and the user can't deduce from his balance...
  const { accountTotal } = useAccountTotalStore();
  const {
    totalTransactionsNumber,
    failedTransactionsCount,
    successfulTransactionsCount,
    inProgressTransactionsCount,
  } = useTransactionsStore();

  const { theme, width } = useThemeStore();
  const styles = createStyles(theme, width);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <View style={{ alignItems: "center" }}>
        <CircleBuilder
          SVG={DoubleCardSVG}
          svgWidth={39}
          svgHeight={39}
          subtitle={"Total Number"}
          total={totalTransactionsNumber}
          circleWidth={117}
          circleHeight={117}
        />

        <View style={styles.row}>
          <CircleBuilder
            SVG={SuccessfulSVG}
            svgWidth={18}
            svgHeight={18}
            subtitle={"Successful"}
            total={successfulTransactionsCount}
            circleWidth={83}
            circleHeight={83}
          />

          <CircleBuilder
            SVG={InProgressSVG}
            svgWidth={18}
            svgHeight={18}
            subtitle={"In Progress"}
            total={inProgressTransactionsCount}
            circleWidth={83}
            circleHeight={83}
          />

          <CircleBuilder
            SVG={FailedSVG}
            svgWidth={18}
            svgHeight={18}
            subtitle={"Failed"}
            total={failedTransactionsCount}
            circleWidth={83}
            circleHeight={83}
          />
        </View>

        <View style={styles.total}>
          <LinearGradient 
           colors={["#e369a0", "#8b44b3"]}
           style={styles.gradientDislocatedView}>
            <Text style={styles.dislocatedViewText}>Total Earnings</Text>
          </LinearGradient>
          <Text style={styles.balance}>N {formatBalance(accountTotal)}</Text>
        </View>
      </View>
      <RecentTransactionsView />
    </SafeAreaView>
  );
};

const createStyles = (theme: ThemeType, width: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    title: {
      color: theme.colors.defaultTitle,
      fontSize: 16,
      paddingLeft: 26,
      paddingBottom: 33,
    },
    row: {
      flexDirection: "row",
      paddingTop: 31,
      justifyContent: "space-between",
      width: width * 0.7,
    },
    total: {
      width: 207,
      height: 61,
      marginTop: 57,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderStyle: "dashed",
      borderColor: "purple",
    },
    balance: {
      color: theme.colors.recentTransactionSecondary,
      fontSize: 24,
      top: -10
    },
    gradientDislocatedView: {
        width: 101,
        height: 31,
        alignItems: 'center',
        justifyContent: 'center',
        top: -10
    },
    dislocatedViewText: {
        color: theme.colors.secondary,
        fontSize: 11,
    }
  });

export { TransactionHistory };
