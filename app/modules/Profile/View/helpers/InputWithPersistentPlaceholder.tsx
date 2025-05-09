import { StringOrUndefinedSetter, StringSetter } from '@common/types/SetStateType';
import { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface InputWithPersistentPlaceholderProps {
    labelText: string,
    value: string | string | undefined,
    onChangeText: StringSetter | StringOrUndefinedSetter,
    isSecureTextEntry?: boolean
    isPhoneNumber?: boolean
}

const InputWithPersistentPlaceholder = (props: InputWithPersistentPlaceholderProps) => {
  const { labelText, value, onChangeText, isSecureTextEntry, isPhoneNumber } = props
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text 
        style={[
          styles.label,
          (isFocused || value) && styles.labelFocused
        ]}
      >
        {labelText}
      </Text>

      <TextInput
        style={[styles.input, (isFocused) && {color: 'black'}]}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={isSecureTextEntry && !isFocused}
        keyboardType={isPhoneNumber ? 'phone-pad' : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 20,
    width: '85%',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 5,
    fontSize: 16,
    color: '#555'
  },
  label: {
    position: 'absolute',
    left: 10,
    top: 15,
    fontSize: 16,
    color: '#D1D1D1',
    backgroundColor: 'transparent',
  },
  labelFocused: {
    top: 5,
    fontSize: 12,
    color: '#555',
  },
});

export default InputWithPersistentPlaceholder;