import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./style";
interface IButtonProps {
  children: string;
  onPress: () => void;
  mode?: string;
  style?: any;
}

const Button: React.FC<IButtonProps> = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;
