import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomeButton from "../../components/CustomeButton";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [submutting, setSubmitting] = useState(false);
  const handleSubmit = () => {
    console.log(form);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
    // // navigate to home screen.
    // navigation.navigate("home");
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[90vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px]   h-[34px]"
          />
          <Text className="font-psemibold text-[#FFFFFF] text-[22px] mt-10">
            Sign in
          </Text>
          <FormField
            title={"Email"}
            value={form.email}
            handleChnageText={(e) => setForm({ ...form, email: e })}
            otherStyles={"mt-7"}
            keyboardType={"email-address"}
            placeholrder={"Enter your email"}
          />
          <FormField
            title={"Password"}
            value={form.password}
            handleChnageText={(e) => setForm({ ...form, password: e })}
            otherStyles={"mt-7"}
            placeholrder={"Enter your password"}
          />
          <CustomeButton
            title={"Log in"}
            containerStyle={"w-full mt-7"}
            handlePress={() => router.push("/home")}
            isLoading={submutting}
          />
          <Text className="text-[14px] text-gray-100 leading-5 text-center mt-6 font-psemibold">
            Don't have an account?{" "}
            <Link className="text-secondary" href={"/sign-up"}>
              Sign up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
