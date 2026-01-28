import { useState } from "react";
import { Button, View, Text } from "react-native";

const ButtonCounter = () => {
  const [currentCount, setCurrentCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.container}>
        {" "}
        Current button count is: "{currentCount}"
      </Text>

      <View style={styles.container}>
        <Button
          onPress={() => {
            setCurrentCount(currentCount + 1);
          }}
          title="Increment Count"
        />
      </View>
      <View style={styles.container}>
        <Button
          onPress={() => {
            setCurrentCount(0);
          }}
          title="Reset Count"
        />
      </View>
    </View>
  );
};

const WelcomeCard = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text>
        {" "}
        TITLE : {title} : {"\n"} {subtitle}
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <ButtonCounter />
    </View>
  );
};

const styles = {
  container: {
    marginTop: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
};

export default HomeScreen;
