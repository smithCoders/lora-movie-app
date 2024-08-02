import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import TrendingVideo from "../../components/TrendingVideo";
const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[95vh] px-4 my-6">
          <View className="flex-row items-center justify-between px-5">
            {/* welcome info */}
            <View>
              <Text className="text-[#CDCDE0] font-pmedium">welcome back</Text>
              <Text className="text-[24px] text-white font-psemibold">
                Esmael
              </Text>
            </View>
            {/* logo */}
            <Image
              source={images.logoSmall}
              className="w-[30px] h-[34px]"
              resizeMode="contain"
            />
          </View>

          <FormField placeholrder={"search for video Input"} />
          {/* vidoe section. */}
          <View className="w-full  h-full flex-1 px-5 mt-7">
            <Text className="text-[#CDCDE0] text-[14px] font-pregular ">
              Trending videos
            </Text>
            <TrendingVideo post={[{ id: 1 }, { id: 2 }] ?? []} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
