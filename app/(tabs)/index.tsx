import React from "react";
import { Button, Keyboard, Text, TextInput, View } from "react-native";
import { KeyboardStickyView } from "react-native-keyboard-controller";

export default function HomeScreen() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <View style={{ flex: 1, gap: 12 }}>
        <TextInput
          placeholder="Type a message..."
          style={{
            height: 50,
            padding: 12,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            margin: 12,
          }}
        />

        <Button title="Dismiss Keyboard" onPress={() => Keyboard.dismiss()} />

        <Text style={{ fontSize: 24, textAlign: "center" }}>{count}</Text>
      </View>

      <KeyboardStickyView>
        <Button title="Press Me" onPress={() => setCount((prev) => prev + 1)} />
      </KeyboardStickyView>
    </View>
  );
}
