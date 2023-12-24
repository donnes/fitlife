import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-3xl font-bold mb-[30px]">
          This screen doesn't exist.
        </Text>

        <Link href="/" className="py-3">
          <Text className="text-blue-400">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
