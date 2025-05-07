import { ExchangeMethodType } from "@modules/Home/ViewModel/types/ExchangeMethodType";
import { TextInput, StyleSheet } from "react-native";
import { ExchangeCurrencyViewModel } from "./ExchangeCurrencyViewModel";
import { useThemeStore } from "@themes/useThemeStore";
import { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';

interface ExchangeInputsBuilderProps {
  item: Readonly<ExchangeMethodType>;
  viewModel: ExchangeCurrencyViewModel;
}

const ExchangeInputsBuilder = (props: ExchangeInputsBuilderProps) => {
  const { theme, width } = useThemeStore();
  const item: ExchangeMethodType = props.item;
  const viewModel = props.viewModel;

  if (item.type === "gift") {
    // TODO: - passar para o viewmodel

    const styles = createStyles(width)

    const cardTypes = [{ label: "Gift", value: "gift" }];

    const currencies = [
      { label: "USD", value: "USD" },
      { label: "EUR", value: "EUR" },
      { label: "JPY", value: "JPY" },
      { label: "GBP", value: "GBP" },
    ];

    const cardValues = [
      { label: "$50", value: "50" },
      { label: "$100", value: "100" },
      { label: "$200", value: "200" },
      { label: "$300", value: "300" },
    ];

    return (
      <>
        <Dropdown
          style={styles.dropdown}
          data={cardTypes}
          labelField="label"
          valueField="value"
          placeholder="Select Card Type"
          value={viewModel.cardType}
          onChange={(item) => viewModel.setCardType(item.value)}
        />

        <Dropdown
          style={styles.dropdown}
          data={currencies}
          labelField="label"
          valueField="value"
          placeholder="Select Currency"
          value={viewModel.currency}
          onChange={(item) => viewModel.setCurrency(item.value)}
        />

        <Dropdown
          style={styles.dropdown}
          data={cardValues}
          labelField="label"
          valueField="value"
          placeholder="Select Gift Card Value"
          value={viewModel.cardValue}
          onChange={(selectedItem) => {
            viewModel.handleTotal(selectedItem.value, item.amount, item.rate)
            viewModel.setCardValue(selectedItem.value)
          }}
        />
      </>
    );
  }

  return (
    <>
      <TextInput
        keyboardType="numeric"
        placeholder={`${item.name} value`}
        value={viewModel.exchangeValue}
        onChangeText={(text) =>
          viewModel.handleTotal(text, item.amount, item.rate)
        }
        style={[theme.textInputWithIcon, { marginBottom: 20}]}
      />
    </>
  );
};

const createStyles = (width: number) => StyleSheet.create({
    dropdown: {
      height: 50,
      width: width * 0.8,
      marginBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
    },
  });

export { ExchangeInputsBuilder };
