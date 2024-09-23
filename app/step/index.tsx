import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { colors } from "@/constants/colors";
import { Header } from "@/components/Header";

export default function Step() {
  return (
    <View>
      <Header step="1" title="Vamos começar!" />
    </View>
  );
}
