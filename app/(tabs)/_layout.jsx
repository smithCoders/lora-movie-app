import React from "react";
import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import icons from "../../constants/icons";
const TabIcon = ({ icon, name, color, focused }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarActiveTintColor: "#FFA001",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 74,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                focused={focused}
                name={"Home"}
                color={color}
              />
            ),
          }}
        />
        {/*tab-2 */}
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                focused={focused}
                color={color}
                name={"Create"}
              />
            ),
          }}
        />
        {/* tab-3 */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                focused={focused}
                name={"Profile"}
                color={color}
              />
            ),
          }}
        />
        {/* tab-4 */}
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                focused={focused}
                name={"Bookmark"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
