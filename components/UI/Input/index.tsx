import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import { styles } from "./style";

interface IInputProps {
  label: string;
  textInputCongig?: TextInputProps;
  style?: string;
  invalid?: boolean;
}

const Input = ({ label, textInputConfig, style, invalid }) => {
  const inputStyles: any = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;
