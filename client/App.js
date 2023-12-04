import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs(["new NativeEventEmitter()"]);
  // ignore log message for addListener and removeListeners

  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);

  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    const getOrientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(getOrientation);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/Guitar_Fretboard_Open_Strings_Diagram.png")}
        resizeMode={"stretch"}
        style={{ height: 100, width: "100%" }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
