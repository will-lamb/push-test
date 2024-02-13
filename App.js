import React from "react";
import { View } from "react-native";
import PushNotificationHandler from "./components/PushNotificationHandler";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <PushNotificationHandler
        to={["ExponentPushToken[aFycybEZ9SG3p-8PLIKqEf]"]}
        title="TEST"
        body="This is the body test"
        sound="default"
        priority="high"
      />
    </View>
  );
}
