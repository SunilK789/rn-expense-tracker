import { View, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "./style";

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="white" />
    </View>
  );
};

export default LoadingOverlay;
