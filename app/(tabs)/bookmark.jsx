import React from "react";
import { View, Text } from "react-native";
import { tw } from "nativewind";

const Bookmark = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-base`}>Bookmark</Text>
    </View>
  );
};

export default Bookmark;
