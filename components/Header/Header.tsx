import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { router } from "expo-router";

type HeaderProps = {
  step: string;
  title: string;
};

export function Header({ step, title }: HeaderProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Pressable
            onPress={() => {
              router.back();
            }}
          >
            <Feather name="arrow-left" size={24} color={colors.black} />
          </Pressable>
          <Text style={[styles.text]}>
            Passo {step}{" "}
            <Feather name="loader" size={16} color={colors.black} />
          </Text>
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    marginBottom: 14,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight! + 34 : 34,
    elevation: 4,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 34,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.background,
  },
});
