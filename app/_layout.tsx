import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition: "left",
          drawerType: "front",
          drawerStyle: {
            backgroundColor: "#021520",
            width: 250,
          },
          headerShown: true,
          drawerInactiveBackgroundColor: "#021520",
          drawerLabelStyle: {
            color: "white",
          },
        }}
        drawerContent={(props) => {
          return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#021520" }}>
              <View
                style={{
                  height: 200,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#021520",
                  paddingBottom: 12,
                }}
              >
                <Ionicons name="person" color="white" size={100} />
                <Text
                  style={{
                    fontSize: 22,
                    color: "white",
                    fontWeight: "bold",
                    marginVertical: 8,
                  }}
                >
                  Can Gündüz
                </Text>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            drawerIcon: () => <Ionicons name="home" color="white" size={24} />,
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Profile",
            drawerIcon: () => (
              <Ionicons name="person" color="white" size={24} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
