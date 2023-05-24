import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleText: {
    fontSize: 24
  },
  image: {
    width: "100%",
    height: 200
  },
  btnText: {
    color: "blue",
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    paddingBottom: 2,
    fontSize: 16
  }
});