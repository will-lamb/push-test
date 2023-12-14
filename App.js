import React from "react";
import { View } from "react-native";
import PushNotificationHandler from "./components/PushNotificationHandler";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <PushNotificationHandler
        to={["ExponentPushToken[Ev0ekyN4DFhNbbhSx247t9]"]}
        title="TEST"
        body="This is the body test"
        sound="default"
        priority="high"
      />
    </View>
  );
}
