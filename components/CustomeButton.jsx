import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomeButton = ({ title, containerStyle, handlePress, isLoading }) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-200  rounded-xl min-h-[58px] justify-center items-center font-psemibold ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      } `}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className="text-primary font-psemibold text-lg capitalize">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomeButton;
