import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // hides the default header for all tabs
        tabBarStyle: { backgroundColor: "#FFF8F0", height: 60 },
        tabBarActiveTintColor: "#5D4037", // dark brown active tab
        tabBarInactiveTintColor: "#8D6E63", // light brown inactive tab
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Menu",
        }}
      />
      <Tabs.Screen
        name="second_screen"
        options={{
          title: "Categories",
        }}
      />
      <Tabs.Screen
        name="window"
        options={{
          title: "About",
        }}
      />
    </Tabs>
  );
}
