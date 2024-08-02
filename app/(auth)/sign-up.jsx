import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import images from "../../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomeButton from "../../components/CustomeButton";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [submutting, setSubmitting] = useState(false);
  const handleSubmit = () => {
    navigation.navigate("home");
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[90vh] justify-center px-4  my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[34px]"
            resizeMode="contain"
          />
          <View>
            <Text className="text-[22px] font-psemibold text-white mt-10">
              Sign Up
            </Text>
            <FormField
              title={"user name"}
              value={form.userName}
              placeholrder={"Enter Your Name"}
              otherStyles={"mt-7"}
              keyboardType={"email-address"}
              handleChnageText={(e) => setForm({ ...form, userName: e })}
            />
            <FormField
              title={"Email"}
              value={form.email}
              placeholrder={"Enter Your Email"}
              otherStyles={"mt-7"}
              handleChnageText={(e) => setForm({ ...form, email: e })}
            />
            <FormField
              title={"Password"}
              value={form.password}
              placeholrder={"Enter Your Password"}
              otherStyles={"mt-7"}
              handleChnageText={(e) => setForm({ ...form, password: e })}
            />
            <CustomeButton
              title={"Sign up"}
              containerStyle={"mt-7 w-full"}
              isLoading={submutting}
              handlePress={handleSubmit}
            />
            <Text
              className="text-[14px]  text-gray-100 mt-6 font-pregular leading-5 text-center
            "
            >
              Already have an account?{" "}
              <Link href={"sign-in"} className="text-[#FF9001] mr-4">
                Log in
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
