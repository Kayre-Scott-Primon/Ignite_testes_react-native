import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray_900,
    padding: 20,
    paddingBottom: 0,
    gap: 8,
  },
  scroll: {
    gap: 8,
    paddingBottom: 32,
  },
  container_header: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.red_light,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  textButton: {
    fontSize: 20,
    textAlign: "center",
  },
});
