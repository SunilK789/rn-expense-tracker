import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import { styles } from "./style";

interface IInputProps {
  label: string;
  textInputCongig?: TextInputProps;
}

const Input = ({ label, textInputConfig }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          textInputConfig?.multiline && styles.inputMultiline,
        ]}
        {...textInputConfig}
      />
    </View>
  );
};

export default Input;
