import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomeButton from "../components/CustomeButton";
export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh] items-center  justify-center  px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibility with{"  "}
              <Text className="text-secondary-200">oAra</Text>
            </Text>
          </View>
          {/* text-descirption */}
          <View className="w-[325px] px-[25px] mt-6">
            <Text className="text-[14px] font-Pregular text-[#CDCDE0] text-center  leading-5">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>
          </View>
          <CustomeButton
            title={"continue with Email"}
            handlePress={() => router.push("/sign-in")}
            containerStyle={"w-full mt-7 "}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#FFFFFF" style="light" />
    </SafeAreaView>
  );
}
