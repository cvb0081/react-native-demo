import { View } from "react-native";
import WelcomeCard from "../../src/components/WelcomeCard";

const HomeScreen = () => {
  return (
    <View>
      <WelcomeCard title="Welcome card 1" subtitle="this is card 1" />
      <WelcomeCard title="Welcome card 2" subtitle="this is card 2" />
    </View>
  );
};

export default HomeScreen;
