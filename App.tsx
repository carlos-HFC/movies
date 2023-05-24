import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { Routes } from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>App de Filmes</Text>
      </View>
      <StatusBar barStyle="default" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
    backgroundColor: "transparent"
  },
  header: {
    paddingBottom: 48,
    alignItems: "center",
    width: "100%"
  },
  headerText: {
    fontSize: 48,
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#222",
    width: "100%",
    textAlign: "center"
  }
});