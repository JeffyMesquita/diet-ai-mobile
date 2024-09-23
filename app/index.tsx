import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { colors } from "@/constants/colors";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />

      <Text style={styles.title}>
        Dieta
        <Text
          style={{
            color: colors.white,
          }}
        >
          .IA
        </Text>
      </Text>

      <Text style={styles.text}>
        Sua dieta personalizada com base em inteligência artificial.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("Gerar dieta");
        }}
      >
        <Text style={styles.buttonText}>Gerar Dieta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.green,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
    marginTop: 16,
    width: "80%",
    marginVertical: 8,
  },
  button: {
    backgroundColor: colors.blue,
    width: "100%",
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 34,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
