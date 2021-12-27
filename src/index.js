import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./Navigation";

import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
}
